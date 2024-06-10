import Link from 'next/link';
import Header from '../../components/Header';
import { getSectionList } from '%/src/services/app/section/SectionService';

export default async function TopicsPage() {
  const simpleSectionList = await getSectionList();

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='container mx-auto px-8 py-8'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-3xl font-semibold mb-4'>Topics</h2>
          <ul className='space-y-4'>
            {simpleSectionList.map((section) => (
              <li
                key={section.id}
                className='bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow'
              >
                <Link href={`/section/${section.id}`}>
                  <span className='block text-xl font-semibold text-blue-600 hover:underline cursor-pointer'>
                    {section.title}
                  </span>
                </Link>
                <p className='text-gray-700'>{section.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
