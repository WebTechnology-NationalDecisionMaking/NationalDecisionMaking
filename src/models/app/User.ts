export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  image: string | null;
  updatedAt: Date;
}