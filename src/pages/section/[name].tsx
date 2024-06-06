import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Question {
  id: string;
  title: string;
  description: string;
  type: 'value' | 'select';
  selectionList: string[];
  defaultSelection: string;
  defaultValue: number;
}

interface Section {
  name: string;
  title: string;
  legalContent: string;
  questions: Question[];
}

// Example data simulating the API response
const exampleData: Section = {
  name: 'ExampleSection',
  title: 'Example Section Title',
  legalContent: 'This is the legal content of the example section.',
  questions: [
    {
      id: '1',
      title: 'Example Question 1',
      description: 'Description of example question 1',
      type: 'select',
      selectionList: ['Option 1', 'Option 2', 'Option 3'],
      defaultSelection: 'Option 1',
      defaultValue: 0,
    },
    {
      id: '2',
      title: 'Example Question 2',
      description: 'Description of example question 2',
      type: 'value',
      selectionList: [],
      defaultSelection: '',
      defaultValue: 10,
    },
  ],
};

export default function SectionPage() {
  const router = useRouter();
  const { name } = router.query;
  const [section, setSection] = useState<Section | null>(null);

  useEffect(() => {
    // Simulate fetching data from an API
    if (name) {
      setSection(exampleData);
    }
  }, [name]);

  if (!section) return <div>Loading...</div>;

  return (
    <div>
      <h1>{section.title}</h1>
      <p>{section.legalContent}</p>
      <ul>
        {section.questions.map(question => (
          <li key={question.id}>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
            <p>Type: {question.type}</p>
            {question.type === 'select' && (
              <ul>
                {question.selectionList.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            )}
            <p>Default Selection: {question.defaultSelection}</p>
            <p>Default Value: {question.defaultValue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
