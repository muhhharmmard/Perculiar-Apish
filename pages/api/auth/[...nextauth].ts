import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import TwitterProvider from 'next-auth/providers/twitter'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from "../../../Lib/connect";
import type { NextAuthOptions } from 'next-auth'
 
export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
 
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0"
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // Passwordless / email sign in
  /*  EmailProvider({
      server: process.env.MAIL_SERVER,
      from: 'NextAuth.js <no-reply@example.com>'
    }),*/
  ],
  secret: process.env.SECRET,
  database:process.env.APISH,
  pages: {
  signIn: '../../auth/signin',
  signOut: '../../auth/signout',
 /* error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)*/
  newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
},
session: {
  // Choose how you want to save the user session.
  // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
  // If you use an `adapter` however, we default it to `"database"` instead.
  // You can still force a JWT session by explicitly defining `"jwt"`.
  // When using `"database"`, the session cookie will only contain a `sessionToken` value,
  // which is used to look up the session in the database.
  strategy: "database",

  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 13 * 24 * 60 * 60, // 13 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  updateAge: 24 * 60 * 60, // 24 hours
},
callbacks: {
  async redirect({ url, baseUrl }) {
    return baseUrl
    // Allows relative callback URLs
   /* if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl*/
  },
  async signIn({account, profile,user,session}) {
    user.wishlist =[];
    user.cart = []
    return true;
},
async session({ session,account,user }) {
    session.account = account;
    return session
}
}
}
export default NextAuth(authOptions)





