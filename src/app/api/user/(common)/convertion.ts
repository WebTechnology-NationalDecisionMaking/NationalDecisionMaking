import { UserDTO } from '@/models/dto/UserDTO';

export function rawToUserDTO<
  T extends {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    image: string | null;
    updatedAt: Date;
    age: number;
    gender: string;
    incomeRange: number;
  },
>(raw: T): UserDTO {
  return {
    ...raw,
    createdAt: raw.createdAt.toISOString(),
    updatedAt: raw.updatedAt.toISOString(),
    gender: raw.gender === 'male' ? 'male' : 'female',
  } satisfies UserDTO;
}
