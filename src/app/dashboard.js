import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [totalEntradas, setTotalEntradas] = useState(0);
  const [totalSaidas, setTotalSaidas] = useState(0);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        // Pega os dados do usuário e da empresa do localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.codi_emp) {
          const entradasResponse = await axios.get(`https://dashboard-back-end-bv2l.vercel.app/sum/entradas?company_code=${user.codi_emp}`);
          const saidasResponse = await axios.get(`https://dashboard-back-end-bv2l.vercel.app/sum/saidas?company_code=${user.codi_emp}`);
          setTotalEntradas(entradasResponse.data.total);
          setTotalSaidas(saidasResponse.data.total);
        }
      } catch (error) {
        console.error('Erro ao buscar totais:', error);
      }
    };

    fetchTotals();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h2 className="mb-4 text-2xl font-bold">Dashboard</h2>
        <div className="p-4 bg-white rounded shadow-md">
          <p className="mb-2 text-lg">Total de Entradas: <span className="font-bold">{totalEntradas}</span></p>
          <p className="text-lg">Total de Saídas: <span className="font-bold">{totalSaidas}</span></p>
        </div>
      </div>
    </div>
  );
}
