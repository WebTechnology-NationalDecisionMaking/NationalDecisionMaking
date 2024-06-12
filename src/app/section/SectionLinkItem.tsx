'use client';

import { useAuthenticationStore } from '%/src/context/authProvider';
import { SimpleSection } from '%/src/models/section';
import { AuthenticationStatus } from '%/src/store/AuthenticationStore';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

function SectionLinkItem({ section }: { section: SimpleSection }) {
  const router = useRouter();
  const isAuthenticated =
    useAuthenticationStore().status === AuthenticationStatus.Authenticated;

  const handleClickSection = (id: string) => {
    if (isAuthenticated) {
      router.push(`/section/${id}`);
    } else {
      router.push(`/login`);
    }
  };

  return (
    <li
      key={section.id}
      className='bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow'
    >
      <button onClick={() => handleClickSection(section.id)}>
        <span className='block text-xl font-semibold text-blue-600 hover:underline cursor-pointer'>
          {section.title}
        </span>
      </button>
      <p className='text-gray-700'>{section.description}</p>
    </li>
  );
}

export default observer(SectionLinkItem);
