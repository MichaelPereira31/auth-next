"use client"

import { FormEvent } from "react";
import { signIn } from "next-auth"


export default function Home() {
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const data = {
      login: formData.get('login'),
      password: formData.get('password')
    }

    console.log(data)
    signIn("credentials",{...data, callbackUrl:'/'})
  }

  return (
    <main className="flex justify-center h-screen items-center">
    <div className="w-[80%] md:w-screen md:flex md:justify-around md:items-center">
     <div className="text-center">Logo da empresa</div>
     <div className="bg-red-900 p-10 rounded-3xl">
      <form onSubmit={login} method="post" className="flex flex-col">
          <label htmlFor="login" className="text-xl">Login</label>
          <input type="login" name="login" id="login" className="p-2 mb-5 rounded-2xl"/>
          
          <label htmlFor="password" className="text-xl">Senha</label>
          <input type="password" name="password" id="password" className="p-2 mb-5 rounded-2xl"/>

          <div className="flex justify-center">
            <button className="px-5 py-2 bg-blue-900 rounded-2xl">Entrar</button>
          </div>
      </form>
     </div>
     </div>
   </main>
  );
}
