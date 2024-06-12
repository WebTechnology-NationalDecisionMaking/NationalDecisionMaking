export const dynamic = 'force-dynamic';

import Header from '%/src/components/Header';
import SectionContent from '%/src/components/SectionContent';
import QuestionList from '%/src/components/QuestionList';
import { getSection } from '%/src/services/app/section/SectionService';
import { redirect } from 'next/navigation';

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
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='container mx-auto p-8 grid grid-cols-1 md:grid-cols-5 gap-8'>
        <div className='md:col-span-3'>
          <SectionContent
            title={section.title}
            legalContent={section.legalContent}
          />
        </div>
        <div className='md:col-span-2'>
          <QuestionList questions={section.questions} id={id} />
        </div>
      </main>
    </div>
  );
}
