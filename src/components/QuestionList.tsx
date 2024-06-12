import Link from 'next/link';
import { Question } from '../models/section';

interface QuestionListProps {
  questions: Question[];
  id: string;
}

const QuestionList: React.FC<QuestionListProps> = ({ questions, id }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <ul className='space-y-6'>
        {questions.map((question) => (
          <li
            key={question.id}
            className='p-4 border rounded-lg hover:bg-gray-50 transition duration-300'
          >
            <h3 className='text-xl font-semibold'>{question.title}</h3>
            <p className='mb-2 text-600'>{question.description}</p>
            {question.type === 'select' && (
              <ul className='list-disc pl-5 mb-2'>
                {question.selectionList.map((option, index) => (
                  <li key={index} className='flex items-center space-x-2'>
                    <input type='radio' name={question.id} id={`${question.id}-${index}`} className='form-radio text-blue-600' />
                    <label htmlFor={`${question.id}-${index}`}>{option}</label>
                  </li>
                ))}
              </ul>
            )}
            {question.type === 'value' && (
              <div className='mb-2'>
                <input
                  type='text'
                  className='border p-2 w-full rounded'
                  placeholder='Enter your value here'
                  defaultValue={question.defaultValue}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link href={`/statistic/${id}`}>
        <button className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded mt-6 w-full hover:from-blue-600 hover:to-indigo-700 transition duration-300'>
          Submit
        </button>
      </Link>
    </div>
  );
};

export default QuestionList;
