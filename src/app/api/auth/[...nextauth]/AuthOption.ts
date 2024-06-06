import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from '@/services/api/user/UserServerService';
import { SHA256 as sha256 } from 'crypto-js';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          credentials.email === undefined ||
          credentials.password === undefined
        ) {
          return null;
        }

        const user = await getUserByEmail(credentials.email);

        if (user === null) {
          return null;
        }

        // check password
        if (user.password !== sha256(credentials.password).toString()) {
          return null;
        }

        return user;
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    async encode(params): Promise<string> {
      // return a custom encoded JWT string
      if (
        params.token === undefined ||
        params.secret === undefined ||
        params.maxAge === undefined
      )
        return '';

      if (params.token.exp !== undefined) {
        return jwt.sign(params.token, params.secret);
      }

      return jwt.sign(params.token, params.secret, {
        expiresIn: params.maxAge,
      });
    },
    async decode(params): Promise<JWT | null> {
      // return a `JWT` object, or `null` if decoding failed
      if (params.token === undefined) {
        return null;
      }
      try {
        return jwt.verify(params.token, params.secret) as JWT;
      } catch (e) {
        return null;
      }
    },
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};
