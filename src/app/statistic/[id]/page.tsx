import { getSection } from '%/src/services/app/section/SectionService';
import { redirect } from 'next/navigation';

import Header from '%/src/components/Header';
import StatisticQuestionList from '%/src/components/StatisticQuestionList';

export default async function StatisticPage({
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
      <main className='container mx-auto p-8 grid grid-cols-1 gap-8'>
        <div>
          <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
            <h2 className='text-3xl font-semibold mb-4'>{section.title}</h2>
            <p className='bg-gray-100 p-4 border-l-4 border-blue-500'>
              {section.description}
            </p>
          </div>
          <StatisticQuestionList questions={section.questions} />
        </div>
      </main>
    </div>
  );
}
