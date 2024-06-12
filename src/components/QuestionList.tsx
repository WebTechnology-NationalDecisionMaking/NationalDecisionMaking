'use client';

import Link from 'next/link';
import { useSectionStore } from '../context/sectionProvider';
import { Question } from '../models/section';
import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

function QuestionItem({ question }: { question: Question }) {
  const store = useSectionStore();
  const Ref = useRef<HTMLLIElement>(null);

  useEffect(
    () => store.registerQuestionRef(question.id, Ref),
    [question.id, store]
  );

  return (
    <li
      key={question.id}
      ref={Ref}
      className='p-4 border rounded-lg hover:bg-gray-50 transition duration-300'
    >
      <h3 className='text-xl font-semibold'>{question.title}</h3>
      <p className='mb-2 text-600'>{question.description}</p>
      {question.type === 'select' && (
        <ul className='list-disc pl-5 mb-2'>
          {question.selectionList.map((option, index) => (
            <li key={index} className='flex items-center space-x-2'>
              <input
                type='radio'
                name={question.id}
                id={`${question.id}-${index}`}
                className='form-radio text-blue-600'
              />
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
  );
}

function QuestionList() {
  const store = useSectionStore();
  const { section } = store;
  const { questions } = section;
  const router = useRouter();

  const handleOnSubmit = () => {
    store.submitQuestions(router);
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6 h-full min-h-0 overflow-y-auto relative'>
      <ul className='mb-8 space-y-4'>
        {questions.map((question) => (
          <QuestionItem question={question} key={question.id} />
        ))}
      </ul>
      <button
        className='sticky bottom-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded mt-6 w-full hover:from-blue-600 hover:to-indigo-700 transition duration-300'
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default observer(QuestionList);
