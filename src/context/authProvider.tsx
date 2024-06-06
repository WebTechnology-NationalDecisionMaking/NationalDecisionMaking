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

    if (authenticationStatus === AuthenticationStatus.Authenticated) {
      // get current pathname
      const { pathname } = window.location;

      if (!pathname.startsWith('/editor') && !pathname.startsWith('/kiosk')) {
        router.push('/editor/calendar');
      }
    } else if (authenticationStatus === AuthenticationStatus.None) {
      router.push('/login');
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
