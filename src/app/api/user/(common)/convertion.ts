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
  },
>(raw: T): UserDTO {
  return {
    ...raw,
    createdAt: raw.createdAt.toISOString(),
    updatedAt: raw.updatedAt.toISOString(),
  } satisfies UserDTO;
}
