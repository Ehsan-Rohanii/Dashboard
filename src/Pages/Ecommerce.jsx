import React from 'react'
import { Stacked, Pie, Button, SparkLine } from '../Components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../Data/dummy'
import { StateContext } from '../Contexts/ContextProvider'
import wellcomeBg from '../Data/welcome-bg.svg';
export default function Ecommerce() {
  return (
    <div className='mt-12'>
  <div className='flex flex-wrap lg:flex-nowrap justify-center'>
    {/* کارت اصلی با SVG full width */}
    <div
      className='bg-white h-44 w-full rounded-xl p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center'
      style={{ backgroundImage: `url(${wellcomeBg})` }}
    >
      <div className='flex justify-between items-center'>
        <div>
          <p className='font-bold'>Earnings</p>
          <p className='text-2xl'>$63,445.16</p>
        </div>
      </div>
      <div className='mt-6'>
        <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md"/>
      </div>
    </div>

    {/* کارت‌های earningData بدون background خاکستری */}
    <div className='flex m-3 gap-2 justify-between flex-wrap lg:flex-nowrap w-full'>
      {earningData?.map((item) => (
        <div
          key={item.title}
          className='flex-1 min-w-[14rem] p-4 pt-9 rounded-2xl flex items-start'
        >
          <button
            type='button'
            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            className='text-4xl opacity-90 rounded-full p-5 hover:drop-shadow-xl cursor-pointer'
          >
            {item.icon}
          </button>
          <div className='ml-4'>
            <p className='mt-1'>
              <span className='text-lg font-semibold'>{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
            </p>
            <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  )
}
