import React from 'react'
import { LineChart , Line , XAxis , YAxis , CartesianGrid , Tooltip , Legend } from 'recharts'

const data = [
  { name: 'A', uv: 400, pv: 240 },
  { name: 'B', uv: 300, pv: 139 },
  { name: 'C', uv: 200, pv: 980 },
  { name: 'D', uv: 278, pv: 390 },
  { name: 'E', uv: 189, pv: 480 },
]

export default function Stacked() {
  return (
    <LineChart width={400} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Line type="monotone" dataKey="pv" stroke="#387908" />
    </LineChart>
  )
}

