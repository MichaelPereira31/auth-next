"use client"
import { signOut } from "next-auth/react";

export default function LogoutButton(){
  return (
    <button className="px-5 py-2 bg-red-600 rounded-2xl" onClick={() => signOut()}>
      Sair
    </button>
  )
}