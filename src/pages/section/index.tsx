import Link from 'next/link';
import Header from '../../components/Header';

interface Topic {
  id: string;
  title: string;
  description: string;
}

// Example data simulating the API response
const exampleTopics: Topic[] = [
  { id: '1', title: 'Example Topic 1', description: 'Description of example topic 1' },
  { id: '2', title: 'Example Topic 2', description: 'Description of example topic 2' },
  { id: '3', title: 'Example Topic 3', description: 'Description of example topic 3' },
];

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Topics</h2>
          <ul className="space-y-4">
            {exampleTopics.map((topic) => (
              <li key={topic.id} className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <Link href={`/section/${topic.id}`}>
                  <span className="block text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                    {topic.title}
                  </span>
                </Link>
                <p className="text-gray-700">{topic.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
