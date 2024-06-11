import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  name: string;
  range1: number;
  range2: number;
  range3: number;
}

const data: DataItem[] = [
  { name: 'Option A', range1: 10, range2: 24, range3: 24 },
  { name: 'Option B', range1: 52, range2: 10, range3: 44 },
  { name: 'Option C', range1: 42, range2: 22, range3: 13 },
  { name: 'Option D', range1: 23, range2: 34, range3: 34 },
  { name: 'Option E', range1: 12, range2: 20, range3: 25 },
  { name: 'Option F', range1: 46, range2: 10, range3: 34 },
  { name: 'Option G', range1: 34, range2: 12, range3: 12 },
];

const IncomeBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='range1' fill='#927AD1' />
        <Bar dataKey='range2' fill='#7C7FBF' />
        <Bar dataKey='range3' fill='#9990D8' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeBarChart;
