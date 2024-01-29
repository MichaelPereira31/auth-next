import { getServerSession } from "next-auth";
import LogoutButton from "./components/LogoutButton";
import { redirect } from "next/navigation";

export default async function Home() {
 const session = await getServerSession()


 if(!session){
  redirect('/login')
 }

  return (
    <main className="flex justify-center h-screen items-center">
      <LogoutButton/>
    <h1>Home</h1>
   </main>
  );
}
