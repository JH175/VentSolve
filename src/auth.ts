import NextAuth, { NextAuthConfig } from 'next-auth';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import twitter from 'next-auth/providers/twitter';
import linkedin from 'next-auth/providers/linkedin';
import facebook from 'next-auth/providers/facebook';
import apple from 'next-auth/providers/apple';
import { PrismaAdapter } from '@auth/prisma-adapter';
import db from './lib/db';

export const authConfig = {
  providers: [github],
  adapter: PrismaAdapter(db),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signOut } = NextAuth(authConfig);
