import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        if(credentials.login ==='michael@gmail.com' && credentials.password ==='123'){
          return {
            id: '1',
            login: credentials.login,
            token: 'seu_token',
            isAdmin: false,
          }
        }

        return null;
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }: any) {
      session = token.user as any
      return session
    },
  }
}
const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }