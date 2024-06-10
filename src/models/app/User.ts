export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  image: string | null;
  updatedAt: Date;
  age: number;
  incomeRange: number;
  gender: 'male' | 'female';
}
