import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  male: number;
  female: number;
}

const data: DataItem[] = [
  { name: 'Option A', male: 7, female: 3},
  { name: 'Option B', male: 30, female: 22},
  { name: 'Option C', male: 10, female: 32},
  { name: 'Option D', male: 12, female: 11},
  { name: 'Option E', male: 2, female: 10},
  { name: 'Option F', male: 36, female: 10},
  { name: 'Option G', male: 20, female: 14},
];

const GenderBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="male" fill="#5e99d8"/>
        <Bar dataKey="female" fill="#d85e5e"/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GenderBarChart;
