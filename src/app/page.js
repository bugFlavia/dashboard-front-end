'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("erro no email ou senha")
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação");
      refresh();
    }
  }
  return (
    <div className="geral h-screen">
      
      
    <div className='mt-20 pb-24 geral'>
      <form  className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={handlerLogin}>
        
      <h1>Bem-vindo</h1>
        
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="botao">Entrar</button>
        <ToastContainer/>
      </form></div>
    </div>
  )
}
