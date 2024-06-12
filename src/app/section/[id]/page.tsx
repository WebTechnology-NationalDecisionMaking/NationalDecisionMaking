export const dynamic = 'force-dynamic';

import Header from '%/src/components/Header';
import SectionContent from '%/src/components/SectionContent';
import QuestionList from '%/src/components/QuestionList';
import { getSection } from '%/src/services/app/section/SectionService';
import { redirect } from 'next/navigation';
import { SectionProvider } from '%/src/context/sectionProvider';

export default async function SectionPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const section = await getSection(id);

  if (!section) {
    redirect('/section');
  }

  return (
    <SectionProvider section={section}>
      <div className='h-screen bg-gray-100 relative flex flex-col'>
        <Header />
        <main className='flex-1 container mx-auto p-8 box-border flex flex-row gap-8 min-h-0'>
          <div className='flex-[3]'>
            <SectionContent />
          </div>
          <div className='flex-[2]'>
            <QuestionList />
          </div>
        </main>
      </div>
    </SectionProvider>
  );
}
