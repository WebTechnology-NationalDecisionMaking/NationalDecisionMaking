'use client';

import { observer } from 'mobx-react-lite';
import { useSectionStore } from '../context/sectionProvider';
import { useCallback, useEffect, useState } from 'react';

function SectionContent() {
  const store = useSectionStore();
  const { section } = store;

  const [contentParts, setContentParts] = useState<React.ReactNode[]>([]);

  const handleIdTagClick = useCallback(
    (idValue: string) => {
      store.scrollToQuestion(idValue);
    },
    [store]
  );

  useEffect(() => {
    const formatContent = (content: string) => {
      const parts: React.ReactNode[] = [];
      const regex = /(<.*?>|\n)/g;

      content.split(regex).forEach((part, index) => {
        if (part === '\n') {
          parts.push(<br key={index} />);
        } else if (part.startsWith('<') && part.endsWith('>')) {
          const idValue = part.slice(1, -1);
          const question = section.questions.find((q) => q.id === idValue);
          if (!question) {
            return parts.push(part);
          }
          parts.push(
            <span
              key={index}
              onClick={() => handleIdTagClick(idValue)}
              className='text-xs rounded-lg bg-blue-500 text-white px-2 py-1 cursor-pointer hover:bg-blue-600 transition-colors'
            >
              {question.title}
            </span>
          );
        } else {
          parts.push(<span key={index}>{part}</span>);
        }
      });

      return parts;
    };

    setContentParts(formatContent(section.legalContent));
  }, [handleIdTagClick, section.legalContent, section.questions]);

  return (
    <div className='bg-white rounded-lg shadow-md p-6 mb-8 h-full relative flex flex-col overflow-y-auto'>
      <h2 className='text-3xl font-semibold mb-4'>{section.title}</h2>
      <div className='bg-gray-100 p-4 border-l-4 border-blue-500'>
        {contentParts.map((part) => part)}
      </div>
    </div>
  );
}

export default observer(SectionContent);
