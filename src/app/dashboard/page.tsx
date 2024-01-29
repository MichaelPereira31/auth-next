"use client"

import LogoutButton from "../components/LogoutButton";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { useEffect } from "react";

export default async function Dashboard() {
  const session = await getServerSession(nextAuthOptions)
  console.log(session, 'aqui ')
 
  if(!session){
   redirect('/login')
  }
  const {user} =  session as Session
  return (
    <main className="flex flex-col justify-center h-screen items-center">
    <div>
      <LogoutButton/>
    </div>
    {user.isAdmin ? <h1>Home</h1> : ''}
   </main>
  );
}
