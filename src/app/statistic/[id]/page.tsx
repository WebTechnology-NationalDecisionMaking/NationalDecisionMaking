'use client';

import { useState } from 'react';

import Header from '%/src/components/Header';
import NormalBarChart from '%/src/components/BarChart/NormalBarChart';
import AgeBarChart from '%/src/components/BarChart/AgeBarChart';
import GenderBarChart from '%/src/components/BarChart/GenderBarChart';
import IncomeBarChart from '%/src/components/BarChart/IncomeBarChart';

interface Category {
  name: string;
  title: string;
  questions: Question[];
}

interface Question {
  id: string;
  title: string;
  description: string;
  type: 'value' | 'select';
  statistic: string;
}

export default function StatisticPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { name } = params;

  const [selectedChart, setSelectedChart] = useState<string>('all');

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='container mx-auto p-8 grid grid-cols-1 gap-8'>
        <div>
          <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
            <h2 className='text-3xl font-semibold mb-4'>title</h2>
            <p className='bg-gray-100 p-4 border-l-4 border-blue-500'>
              description
            </p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-6 mb- space-y-4'>
            <h2 className='text-2xl font-semibold mb-4'>Q1.Some question</h2>
            <p className='bg-gray-100 p-4 border-l-4 border-blue-500'>
              some description
            </p>
            <div>
              <h2 className='text-2xl font-semibold mb-4'>Data Visulation</h2>
              <div className='space-x-4'>
                <button
                  onClick={() => setSelectedChart('all')}
                  className={`mt-1 px-3 py-1 border rounded-2xl shadow-sm focus:outline-none ${selectedChart === 'all' ? 'bg-blue-600 text-white' : 'border-gray-300'}`}
                >
                  ALL
                </button>
                <button
                  onClick={() => setSelectedChart('age')}
                  className={`mt-1 px-3 py-1 border rounded-2xl shadow-sm focus:outline-none ${selectedChart === 'age' ? 'bg-blue-600 text-white' : 'border-gray-300'}`}
                >
                  Group By Age
                </button>
                <button
                  onClick={() => setSelectedChart('gender')}
                  className={`mt-1 px-3 py-1 border rounded-2xl shadow-sm focus:outline-none ${selectedChart === 'gender' ? 'bg-blue-600 text-white' : 'border-gray-300'}`}
                >
                  Group By Gender
                </button>
                <button
                  onClick={() => setSelectedChart('income')}
                  className={`mt-1 px-3 py-1 border rounded-2xl shadow-sm focus:outline-none ${selectedChart === 'income' ? 'bg-blue-600 text-white' : 'border-gray-300'}`}
                >
                  Group By Income Range
                </button>
              </div>
            </div>
            <div className='w-2/3 h-128 p-5'>
              {selectedChart === 'all' && <NormalBarChart />}
              {selectedChart === 'age' && <AgeBarChart />}
              {selectedChart === 'gender' && <GenderBarChart />}
              {selectedChart === 'income' && <IncomeBarChart />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
