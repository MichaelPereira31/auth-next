import { getServerSession } from "next-auth";

export default async function Home() {
 const session = await getServerSession()

  return (
    <main className="flex justify-center h-screen items-center">
    <h1>Home</h1>
   </main>
  );
}
