import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    login: string;
    token: string;
    isAdmin: boolean;
  }

  interface Session {
    user: User;
  }
}