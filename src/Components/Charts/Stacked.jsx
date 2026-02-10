import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: 'Sat', uv: 455, pv: 240 },
  { name: 'Sun', uv: 300, pv: 139 },
  { name: 'Mon', uv: 750, pv: 930 },
  { name: 'Tue', uv: 278, pv: 390 },
  { name: 'Wed', uv: 189, pv: 480 },
  { name: 'Thu', uv: 620, pv: 530 },
  { name: 'Fri', uv: 210, pv: 310 },
];


export default function Stacked() {
  return (
    <BarChart width={400} height={400} data={data}>
      <CartesianGrid stroke="#E5E7EB" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="uv" fill="#B91C1C" />
      <Bar dataKey="pv" fill="#EF4444" />
    </BarChart>
  )
}

