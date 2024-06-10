'server only';

import { SHA256 as sha256 } from 'crypto-js';
import prisma from '@/config/prisma';

export async function createUser(
  email: string,
  password: string,
  name: string,
  age: number,
  gender: 'male' | 'female',
  incomeRange: number
) {
  return prisma.user.create({
    data: {
      email,
      name,
      password: sha256(password).toString(),
      age,
      gender,
      incomeRange,
    },
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function deleteUser(userId: string) {
  return prisma.user.delete({
    where: {
      id: userId,
    },
  });
}
