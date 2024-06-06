import { useAuthenticationStore } from '@/context/authProvider';

export function useUserData() {
  const authenticationStore = useAuthenticationStore();

  return authenticationStore.user;
}
