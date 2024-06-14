"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
     {
          name: "Jan",
          MonthInflow: 4000,
          CreditGiven: 6800
     },
     {
          name: "Feb",
          MonthInflow: 5000,
          CreditGiven: 1800
     },
     {
        name: "Mar",
        MonthInflow: 7000,
        CreditGiven: 2500
     },
     {
        name: "Apr",
        MonthInflow: 5600,
        CreditGiven: 3800
    },
    {
        name: "May",
        MonthInflow: 4000,
        CreditGiven: 6800
   },
   {
          name: "Jun",
          MonthInflow: 2000,
          CreditGiven: 800
     },
     {
        name: "Jul",
        MonthInflow: 9000,
        CreditGiven: 4800
    },
    {
        name: "Aug",
        MonthInflow: 14000,
        CreditGiven: 8800
   },
    {
          name: "Sep",
          MonthInflow: 9000,
          CreditGiven: 6800
     },
    {
        name: "Oct",
        MonthInflow: 10000,
        CreditGiven: 5800
   },
    {
          name: "Nov",
          MonthInflow: 2800,
          CreditGiven: 800
     },
     {
        name: "Dec",
        MonthInflow: 7000,
        CreditGiven: 2800
   },
]
const TransactionGraph = () => {
  return (
        <ResponsiveContainer width="100%" height="100%">
               <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                               top: 20,
                               right: 30,
                               left: 0,
                               bottom: 5,
                        }}
               >
                       <CartesianGrid horizontal={false} vertical={false} />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={13} />
                       <YAxis axisLine={false} tickLine={false} fontSize={13}  />
                       <Tooltip cursor={false} wrapperStyle={{ outline: "none" }}  />
                       {/* <Legend /> */}
                       <Bar dataKey="CreditGiven" stackId="a" fill="#2E7461" radius={[10, 10, 10, 10]} />
                       <Bar dataKey="MonthInflow" stackId="a"  fill="#FFD17A" radius={[10, 10, 10, 10]} />
               </BarChart>
  </ResponsiveContainer>
  )
}

export default TransactionGraph