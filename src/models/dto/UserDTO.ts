export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
}

export interface UserDTO {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  image: string | null;
  updatedAt: string;
}