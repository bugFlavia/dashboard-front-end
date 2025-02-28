import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dashboard-back-end-bv2l.vercel.app/login', { email, senha });
      // Salve os dados do usuário no localStorage ou cookies
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('companyData', JSON.stringify(response.data.companyData));
      // Redireciona para a dashboard
      router.push('/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Entrar
        </button>
      </form>
    </div>
  );
}