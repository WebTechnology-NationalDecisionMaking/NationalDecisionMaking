import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import SectionContent from '../../components/SectionContent';
import QuestionList from '../../components/QuestionList';
import Loading from '../../components/Loading';

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

// Example data
const exampleData: Section = {
  name: 'ExampleSection',
  title: 'Example Section Title',
  legalContent: "ISC -- NVIDIA today announced that it will accelerate quantum computing efforts at national supercomputing centers around the world with the open-source NVIDIA CUDA-Q platform. Supercomputing sites in Germany, Japan and Poland will use the platform to power the quantum processing units (QPUs) inside their NVIDIA-accelerated high-performance computing systems. QPUs are the brains of quantum computers that use the behavior of particles like electrons or photons to calculate differently than traditional processors, with the potential to make certain types of calculations faster. Germany’s Jülich Supercomputing Centre (JSC) at Forschungszentrum Jülich is installing a QPU built by IQM Quantum Computers as a complement to its JUPITER supercomputer, supercharged by the NVIDIA GH200 Grace Hopper™ Superchip. The ABCI-Q supercomputer, located at the National Institute of Advanced Industrial Science and Technology (AIST) in Japan, is designed to advance the nation’s quantum computing initiative. Powered by the NVIDIA Hopper™ architecture, the system will add a QPU from QuEra.",
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

  if (!section) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <SectionContent title={section.title} legalContent={section.legalContent} />
        </div>
        <div className="md:col-span-2">
          <QuestionList questions={section.questions} />
        </div>
      </main>
    </div>
  );
}