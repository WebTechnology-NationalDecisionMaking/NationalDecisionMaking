import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/services/api/user/UserServerService';
import { NextResponse } from 'next/server';
import { UserDTO } from '@/models/dto/UserDTO';
import { authOptions } from '../auth/[...nextauth]/AuthOption';
import { rawToUserDTO } from './(common)/convertion';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Permission Denied', { status: 403 });
  }

  if (!session.user || !session.user.email) {
    return new Response('Permission Denied', { status: 403 });
  }

  const user = await getUserByEmail(session.user.email);

  if (!user) {
    return new Response('Permission Denied', { status: 403 });
  }

  return NextResponse.json({
    ...rawToUserDTO(user),
  } satisfies UserDTO);
}
