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
  age: string;
  person: number;
}

const data: DataItem[] = [
  { age: '0-10', person: 12 },
  { age: '10-20', person: 44 },
  { age: '20-30', person: 23 },
  { age: '30-40', person: 37 },
  { age: '40-50', person: 10 },
  { age: '50-60', person: 25 },
  { age: '60-70', person: 31 },
];

const AgeBarChart: React.FC = () => {
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
        <XAxis dataKey='age' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='person' fill='#8BC34A' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AgeBarChart;
