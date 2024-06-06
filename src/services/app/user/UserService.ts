import api from '@/config/api';
import { User } from '@/models/app/User';
import { UserDTO } from '@/models/dto/UserDTO';

export async function getUser(): Promise<User> {
  const result = (
    await api.get('/api/user', {
      withCredentials: true,
    })
  ).data as UserDTO;

  return dtoToUser(result);
}

export async function register(
  email: string,
  password: string,
  name: string
): Promise<User> {
  const result = (
    await api.post('/api/user/register', {
      email,
      password,
      name,
    })
  ).data as UserDTO;

  return dtoToUser(result);
}

export async function deleteUser(userId: string) {
  await api.delete(`/api/user/${userId}`, {
    withCredentials: true,
  });
}

// ############ Conversion ############

export function dtoToUser(dto: UserDTO): User {
  return {
    ...dto,
    createdAt: new Date(dto.createdAt),
    updatedAt: new Date(dto.updatedAt),
  };
}
