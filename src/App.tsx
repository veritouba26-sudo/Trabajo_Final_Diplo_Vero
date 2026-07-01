import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

export default function App() {
  const [companyData, setCompanyData] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeRisk = async () => {
    setLoading(true);
    setAnalysis('');
    try {
      const response = await fetch('/api/analyze-risk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyData }),
      });
      const data = await response.json();
      setAnalysis(data.analysis);
    } catch (error) {
      setAnalysis('Error al realizar el análisis. Por favor, intente de nuevo.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Clasificador de Riesgo Financiero
          </h1>
          <p className="text-gray-600">Evaluación automatizada de riesgo corporativo basada en IA.</p>
        </header>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="companyData">
            Datos de la Empresa (CUIT, actividad, deuda, etc.)
          </label>
          <textarea
            id="companyData"
            rows={6}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="Ingrese los datos de la empresa aquí..."
            value={companyData}
            onChange={(e) => setCompanyData(e.target.value)}
          />
          <button
            onClick={analyzeRisk}
            disabled={loading || !companyData}
            className="mt-4 w-full bg-gray-900 text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? 'Analizando...' : 'Analizar Riesgo'}
          </button>
        </div>

        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 whitespace-pre-line"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShieldAlert className="text-blue-600" />
              Resultado del Análisis
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {analysis}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
