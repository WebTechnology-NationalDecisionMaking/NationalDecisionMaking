'use client';

import Link from 'next/link';
import { useAuthenticationStore } from '../context/authProvider';
import { AuthenticationStatus } from '../store/AuthenticationStore';
import { observer } from 'mobx-react-lite';

const Header = () => {
  const authenticationStore = useAuthenticationStore();

  const isAuthenticated =
    authenticationStore.status === AuthenticationStatus.Authenticated;

  const handleLogout = () => {
    authenticationStore.logout();
  };

  return (
    <header className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-md'>
      <div className='container mx-auto px-8 flex justify-between items-center'>
        <Link href='/section'>
          <span className='text-3xl font-bold cursor-pointer'>
            NationalDecisionMaking
          </span>
        </Link>
        <nav>
          <ul className='flex space-x-6'>
            <li>
              <Link href='/section'>
                <span className='text-lg hover:underline cursor-pointer'>
                  Topics
                </span>
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <button onClick={handleLogout}>
                  <span className='text-lg hover:underline cursor-pointer'>
                    Logout
                  </span>
                </button>
              ) : (
                <Link href='/login'>
                  <span className='text-lg hover:underline cursor-pointer'>
                    Log in
                  </span>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default observer(Header);
