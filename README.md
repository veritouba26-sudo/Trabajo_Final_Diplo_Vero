# Clasificador de Riesgo de Empresas con IA Generativa

**Trabajo Final Integrador — Diplomatura en IA Aplicada a Entornos Digitales de Gestión**
FCE-UBA · Cohorte 2026

**Autora:** Verónica Tórtora
📧 vtortora@bcra.gob.ar

---

## 🎯 ¿Qué hace este proyecto?

Este proyecto es un **prototipo de clasificación de riesgo crediticio de empresas** que utiliza IA generativa (ChatGPT) para automatizar la primera etapa del análisis de riesgo.

En el trabajo diario de evaluación crediticia, gran parte del proceso es manual, repetitivo y depende fuertemente del criterio individual de cada analista, lo que genera demoras e inconsistencias entre casos similares. Este prototipo busca resolver eso: a partir de datos básicos de una empresa (actividad económica, nivel de deuda, situación BCRA y observaciones), la IA genera una **clasificación de riesgo (BAJO / MEDIO / ALTO)** junto con una explicación clara del motivo y las señales de alerta detectadas.

> ⚠️ La herramienta funciona como **apoyo al analista, no como reemplazo**: propone una clasificación y una justificación, pero la decisión final y la validación quedan siempre bajo criterio humano.

## 🧩 Nivel de ambición

**Nivel 3 — Contenido generado / prototipo de prompt.** El proyecto consiste en un prompt diseñado y validado iterativamente en ChatGPT, documentado con ejemplos de entrada y salida.

## 🛠️ Herramientas de IA utilizadas

| Herramienta | Uso en el proyecto |
|---|---|
| **ChatGPT (OpenAI)** | Motor principal: analiza los datos de cada empresa, genera la clasificación de riesgo y redacta la explicación asociada a cada resultado |
| **Modelos de lenguaje (LLM) en general** | Interpretación de información no estructurada (observaciones en texto libre) y generación de respuestas estructuradas a partir de instrucciones claras |

## 🚀 Cómo se usa

1. Copiá el siguiente prompt en ChatGPT (o cualquier LLM equivalente):

```
Actuá como un analista de riesgo financiero. Te voy a pasar datos de una
empresa y debés:
1) Clasificar el riesgo como BAJO, MEDIO o ALTO
2) Explicar brevemente el motivo
3) Detectar posibles señales de alerta

Datos:
CUIT: 30-XXXXXXXX-X
Actividad: [actividad]
Deuda: [alta/media/baja]
Situación BCRA: [categoría]
Observaciones: [texto]

Respondé en formato estructurado.
```

2. Completá los corchetes con los datos reales de la empresa a evaluar.
3. La IA devuelve la clasificación, el motivo y las alertas en formato fijo (Clasificación / Motivo / Alertas).

### Ejemplo

**Input:**
```
CUIT: 30-12345678-9
Actividad: Construcción
Deuda: Alta
Situación BCRA: Categoría 4
Observaciones: retrasos de pago frecuentes.
```

**Output generado por la IA:**
```
Clasificación: ALTO
Motivo: la empresa presenta alta deuda y una situación crediticia
deteriorada (Categoría 4), lo cual indica un riesgo significativo de
incumplimiento.
Alertas: retrasos de pago; sector con actividad volátil.
```

## 📄 Metodología (resumen)

- **Definición del problema:** clasificar empresas según riesgo financiero de forma más rápida y consistente que el proceso manual.
- **Diseño del prompt:** iterativo. La primera versión generaba respuestas extensas y poco homogéneas, dificultando la comparación entre casos.
- **Ajuste realizado:** se exigió un formato de salida fijo (Clasificación / Motivo / Alertas) y se acotó la extensión, lo que mejoró notablemente la consistencia.
- **División de tareas:** la analista definió las variables de entrada relevantes y los tres niveles de riesgo; la IA se encargó de interpretar los datos, asignar el nivel y redactar la justificación.

## ✅ Resultados

- Clasificación automática de empresas en riesgo bajo, medio o alto.
- Explicaciones claras y comprensibles para cada clasificación.
- Identificación de señales de alerta relevantes para el analista.
- Consistencia verificada en múltiples pruebas con distintas combinaciones de variables (deuda, actividad, categoría BCRA).

## 🔍 Análisis crítico

**Fortalezas:** rapidez, fácil implementación (sin programación compleja), resultados auditables.

**Limitaciones:** depende de la calidad y veracidad de los datos ingresados; puede simplificar en exceso situaciones financieras complejas; no reemplaza el criterio profesional en casos límite.

**Oportunidades:** integración con bases de datos reales (NOSIS, BCRA), automatización dentro de planillas de Excel internas, uso como primer filtro en procesos de evaluación crediticia.

### Evaluación AIBPS

| Dimensión | Evaluación |
|---|---|
| **Ágil** | ✅ Sí — permite analizar muchas empresas en poco tiempo |
| **Fluida** | ✅ Sí — interacción simple en lenguaje natural, sin conocimientos técnicos |
| **Protegida** | ⚠️ Parcial — no se usan datos reales sensibles en esta etapa; falta incorporar controles de privacidad para producción |
| **Bajo control humano** | ✅ Sí — el analista mantiene siempre la decisión final |

## 💡 Conclusiones

Definir bien el problema y trabajar de forma iterativa sobre el prompt (ajustando formato, alcance y nivel de detalle) resultó tan importante como la elección de la herramienta de IA. La IA funciona mejor como **complemento** del analista que como reemplazo, aportando velocidad y consistencia mientras el criterio profesional sigue siendo insustituible.

**Próximo paso:** integrar el prototipo con datos reales (planilla de Excel o formulario simple) para medir su desempeño en un entorno de trabajo real.

---

*Proyecto realizado en el marco de la Diplomatura en IA Aplicada a Entornos Digitales de Gestión, FCE-UBA, Cohorte 2026.*
