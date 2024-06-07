interface Question {
    id: string;
    title: string;
    description: string;
    type: 'value' | 'select';
    selectionList: string[];
    defaultSelection: string;
    defaultValue: number;
  }
  
  interface QuestionListProps {
    questions: Question[];
  }
  
  const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-6">
          {questions.map((question) => (
            <li key={question.id} className="p-4 border rounded-lg hover:bg-gray-50 transition duration-300">
              <h3 className="text-xl font-semibold">{question.title}</h3>
              <p className="mb-2 text-gray-600">{question.description}</p>
              <p className="text-gray-500 mb-2">Type: {question.type}</p>
              {question.type === 'select' && (
                <ul className="list-disc pl-5 mb-2">
                  {question.selectionList.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              )}
              <p className="text-gray-500">Default Selection: {question.defaultSelection}</p>
              <p className="text-gray-500">Default Value: {question.defaultValue}</p>
            </li>
          ))}
        </ul>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded mt-6 w-full hover:from-blue-600 hover:to-indigo-700 transition duration-300">
          Submit
        </button>
      </div>
    );
  };
  
  export default QuestionList;
  