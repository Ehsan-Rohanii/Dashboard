import React from 'react'
import { Stacked, Pie, Button, SparkLine } from '../Components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../Data/dummy'
import { StateContext } from '../Contexts/ContextProvider'
import wellcomeBg from '../Data/welcome-bg.svg';
export default function Ecommerce() {
  return (
    <div className='mt-10'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div
          className='bg-white h-44 w-full rounded-xl p-8 pt-5 m-3 bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${wellcomeBg})` }}
        >
          <div className='flex justify-between items-center relative'>
            <div className='absolute left-0'>
              <p className='font-bold'>کسب درآمد</p>
              <p className='text-2xl'>76,000,000 تومان</p>
            </div>
          </div>
          <div className='mt-10 mr-[40%]'>
            <Button color="white" bgColor="blue" text="دانلود" borderRadius="10px" size="md" />
          </div>
        </div>

        <div className='flex m-3  justify-between flex-wrap lg:flex-nowrap w-full'>
          {earningData?.map((item) => (
            <div
              key={item.title}
              className='flex-1 min-w-[14rem] p-4 pt-9 rounded-2xl flex items-start'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-4xl opacity-0.9 rounded-full p-5 hover:drop-shadow-xl cursor-pointer'
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
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-gray-200 m-3 p-4 rounded-2xl md:w-[75%]'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>
              به روزرسانی درآمد
            </p>
            <div className='flex item-center gap-4'>
              <p className='flex items-center gap-4 text-gray-800 hover:drop-shadow-xl'>
                <span className=''>0</span>
                <span>هزینه ها</span>
              </p>
              <p className='flex items-center gap-4 text-red-500 hover:drop-shadow-xl'>
                <span className=''>0</span>
                <span>بودجه</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-2 flex-wrap justify-center'>
            <div className='border-l border-gray-400 m-4 pl-16'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>46,000,000 تومان</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>بودجه</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>1,800,000 تومان</span>
                  {/* <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span> */}
                </p>
                <p className='text-gray-500 mt-1'>هزینه ها</p>
              </div>
              <div className='mt-5'>
                <SparkLine/>
              </div>
              <div className='mt-10'>
                <Button color="white" bgColor="blue" text="دانلود گزارش" borderRadius="10px"/>
              </div>
            </div>
            <div className='ml-2'>
              <Stacked />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
