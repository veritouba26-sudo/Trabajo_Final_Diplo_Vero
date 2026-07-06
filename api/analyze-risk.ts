import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyData } = req.body ?? {};
  if (!companyData) {
    return res.status(400).json({ error: 'Company data is required' });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const prompt = `
Actuá como un analista senior de riesgo financiero experto en el mercado corporativo argentino. Tu tarea es evaluar datos de empresas (CUIT, actividad, deuda, situación BCRA) y automatizar su clasificación en niveles de riesgo de forma uniforme y estandarizada.

Reglas estrictas que debés seguir en cada respuesta:
1. Clasificar el riesgo EXCLUSIVAMENTE en una de estas tres opciones: BAJO, MEDIO o ALTO.
2. Explicar brevemente el motivo técnico de la decisión (evaluando la deuda y la volatilidad de la actividad).
3. Detectar posibles señales de alerta a partir de las observaciones provistas.
4. Realizar una breve evaluación de la solución en base a las 4 dimensiones AIBPS (Ágil, Fluida, Protegida, Supervisada).

Respondé siempre utilizando la siguiente estructura limpia:

Clasificación: [BAJO / MEDIO / ALTO]
Motivo: [Explicación técnica]
Alertas:
- [Alerta 1]
- [Alerta 2]

Evaluación AIBPS:
- Ágil: [Breve análisis]
- Fluida: [Breve análisis]
- Protegida: [Breve análisis]
- Supervisada: [Breve análisis]

Datos de la empresa a evaluar:
${companyData}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        temperature: 0.2,
      },
    });

    return res.status(200).json({ analysis: response.text });
  } catch (error) {
    console.error('Error analyzing risk:', error);
    return res.status(500).json({ error: 'Failed to analyze risk' });
  }
}
