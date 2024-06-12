import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '@/config/styled_component_registry';

import { AuthProvider } from '@/context/authProvider';
import GlobalLoading from '../components/GlobalLoading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NationalDecisionMaking',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen h-screen`}>
        <StyledComponentsRegistry>
          <AuthProvider>
            {children}
            <GlobalLoading />
            <div id='modal' />
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
