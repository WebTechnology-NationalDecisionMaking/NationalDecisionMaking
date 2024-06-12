export const dynamic = 'force-dynamic';

import Header from '../../components/Header';
import { getSectionList } from '%/src/services/app/section/SectionService';
import SectionLinkItem from './SectionLinkItem';

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
              <SectionLinkItem key={section.id} section={section} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
