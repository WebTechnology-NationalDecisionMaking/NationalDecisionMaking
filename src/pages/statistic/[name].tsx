import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import NormalBarChart from '%/src/components/BarChart/NormalBarChart';
import GenderBarChart from '%/src/components/BarChart/GenderBarChart';

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


export default function StatisticPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <h1>title</h1>
      <p>description</p>
      <div>
        <h1>Q1.Some question</h1>
        <p>some description</p>
        <div>
          <p>statistics</p>
          <button>ALL</button>
          <button>Group By Age</button>
          <button>Group By Gender</button>
          <button>Group By Income Range</button>
        </div>
      </div>
      Data Visulation
      <div className="w-2/3 h-128 p-5">
        <NormalBarChart />
      </div>
      <div className="w-2/3 h-128 p-5">
        <GenderBarChart />
      </div>
    </div>
  );
}
