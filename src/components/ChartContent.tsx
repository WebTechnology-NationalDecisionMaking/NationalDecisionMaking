'use client';

import { useState } from 'react';

import NormalBarChart from '%/src/components/BarChart/NormalBarChart';
import AgeBarChart from '%/src/components/BarChart/AgeBarChart';
import GenderBarChart from '%/src/components/BarChart/GenderBarChart';
import IncomeBarChart from '%/src/components/BarChart/IncomeBarChart';

const ChartContent = () => {
  const [selectedChart, setSelectedChart] = useState<string>('all');

  return (
    <>
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
    </>
  );
};

export default ChartContent;
