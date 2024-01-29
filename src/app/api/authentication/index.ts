import { getCookie, getCookies, setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default async function Authentication(r: any) {
  try {
    const data = {
      id: '1',
      login: 'login',
      token: 'seu_token',
      isAdmin: true,
    };
    
    setCookie('user', data);


  } catch (error) {
    console.error('Erro durante a autenticação:', error);
  }
}
