export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  incomeRange: number;
}

export interface UserDTO {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  image: string | null;
  updatedAt: string;
  age: number;
  gender: 'male' | 'female';
  incomeRange: number;
}
