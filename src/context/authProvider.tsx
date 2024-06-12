'use client';

import { createContext, useContext, useEffect } from 'react';
import AuthenticationStore, {
  AuthenticationStatus,
  authenticationStore,
} from '@/store/AuthenticationStore';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';

const AuthenticationContext =
  createContext<AuthenticationStore>(authenticationStore);

export const useAuthenticationStore = (): AuthenticationStore =>
  useContext(AuthenticationContext);

const LoginChecker = observer(() => {
  const router = useRouter();
  const authenticationStatus = authenticationStore.status;

  useEffect(() => {
    authenticationStore.checkAuthenticationOnStart();
  }, [router]);

  useEffect(() => {
    if (authenticationStore.status === AuthenticationStatus.Authenticating)
      return;
    if (authenticationStore.isFirstTime) return;

    const url = new URL(window.location.href);
    const pathname = url.pathname;

    if (authenticationStatus === AuthenticationStatus.Authenticated) {
      // get current pathname
      router.push('/section');
    } else if (
      authenticationStatus === AuthenticationStatus.None &&
      pathname !== '/login' &&
      pathname !== '/register' &&
      pathname !== '/section'
    ) {
      router.push('/section');
    }
  }, [router, authenticationStatus]);

  return null;
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthenticationContext.Provider value={authenticationStore}>
      <LoginChecker />
      {children}
    </AuthenticationContext.Provider>
  );
}
