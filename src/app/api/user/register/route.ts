'server only';

import { RegisterDTO, UserDTO } from '@/models/dto/UserDTO';
import { createUser } from '@/services/api/user/UserServerService';
import { NextResponse } from 'next/server';
import { rawToUserDTO } from '../(common)/convertion';

export async function POST(request: Request) {
  const req = (await request.json()) satisfies RegisterDTO as RegisterDTO;

  // validate email
  const { email } = req;
  // use a regex to validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response('Invalid email', { status: 400 });
  }

  // new user
  try {
    const user = await createUser(req.email, req.password, req.name);
    return NextResponse.json({
      ...rawToUserDTO(user),
    } satisfies UserDTO);
  } catch {
    return new Response('User already exists', { status: 400 });
  }
}
