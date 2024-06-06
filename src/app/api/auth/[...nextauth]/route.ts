'server only';

import NextAuth from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOption';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
