import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Spotify
  ],
  callbacks: {
    session({session, token}) {
      if(token.access_token){
        session.access_token = token.access_token;
      }
      
      return session
    },
    jwt({token, account}){
      if(account){
        token.access_token = account.access_token
      }

      return token
    }
  }
})