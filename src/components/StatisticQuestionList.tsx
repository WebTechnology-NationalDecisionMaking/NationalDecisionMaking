import { Question } from '../models/section';
import ChartContent from './ChartContent';

interface QuestionListProps {
  questions: Question[];
}

const StatisticQuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb- space-y-4'>
      {questions.map((question) => (
        <>
          <h2 className='text-2xl font-semibold mb-4'>{question.title}</h2>
          <p className='bg-gray-100 p-4 border-l-4 border-blue-500'>
            {question.description}
          </p>
          <ChartContent />
        </>
      ))}
    </div>
  );
};

export default StatisticQuestionList;
