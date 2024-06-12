'use client';

import { useSectionStore } from '../context/sectionProvider';
import { Question } from '../models/section';
import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import styled, { keyframes, css } from 'styled-components';

const highlightAnimation = keyframes`
  50% {
    background-color: #3c82f666;
    scale: 1.01;
    box-shadow: 0 0 0 0.5rem rgba(60, 130, 246, 0.25);
  }
  100% {
    background-color: white;
    scale: 1;
    box-shadow: none;
  }
`;

const ListItem = styled.li<{ isHighlighted: boolean }>`
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: background-color 0.3s;

  ${(props) =>
    props.isHighlighted &&
    css`
      animation: ${highlightAnimation} 1s ease-in-out;
    `}

  &:hover {
    background-color: #f9fafb;
  }
`;

const QuestionItem = observer(({ question }: { question: Question }) => {
  const store = useSectionStore();
  const Ref = useRef<HTMLLIElement>(null);
  const RenderKeyRef = useRef(0);

  const isHighlightTriggered = store.highlightedQuestionId?.id === question.id;
  const renderKey = RenderKeyRef.current;

  useEffect(
    () => store.registerQuestionRef(question.id, Ref),
    [question.id, store, renderKey]
  );

  if (isHighlightTriggered) {
    RenderKeyRef.current += 1;
  }

  return (
    <ListItem
      ref={Ref}
      isHighlighted={isHighlightTriggered}
      key={`${renderKey}-{question.id}`}
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
    </ListItem>
  );
});

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
