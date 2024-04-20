"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: 'Jan',
      total: 1800,
      amt: 2400,
    },
    {
      name: 'Feb',
      total: 5000,
      amt: 2210,
    },
    {
      name: 'March',
      total: 1500,
      amt: 290,
    },
    {
      name: 'April',
      uv: 2780,
      total: 3000,
      amt: 2000,
    },
    {
      name: 'May',
      total: 2500,
      amt: 2181,
    },
    {
      name: 'Jun',
      total: 8500,
      amt: 500,
    },
    {
      name: 'July',
      total: 6000,
      amt: 2100,
    },
  ];
const WeeklyGraph = () => {
  return (
    <ResponsiveContainer width="99%" height="100%">
           <LineChart width={500} height={300} data={data}  margin={{top: 5, right: 30,left: 0,bottom: 5,}}>
                <CartesianGrid horizontal={false} />
                           <XAxis dataKey="name" axisLine={false} tick={{ fill: '#777', fontSize: 13 }} stroke='#dfdfdf' />
                           <YAxis  stroke="#dfdfdf" tick={false} width={30}/>
                           <Tooltip />
                          {/* <Legend /> */}
                          <Line type="monotone" dataKey="total" stroke="#55b886"  />
                          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
             </LineChart>
  </ResponsiveContainer>
  )
}

export default WeeklyGraph