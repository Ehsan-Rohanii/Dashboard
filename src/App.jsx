import React, { useContext } from 'react'
import { FiSettings } from 'react-icons/fi'
import { Route, Routes } from 'react-router-dom';
import {Navbar , Footer , Sidebar , ThemeSettings} from './Components';
import {Ecommerce , Orders , Calendar , Employees , Stacked , Pyramid , Customers , Kanban , Area , Bar , Pie , Financial ,
   ColorMapping , ColorPicker , Editor , Line } from './Pages';
import { StateContext } from './Contexts/ContextProvider';
import { Tooltip } from 'react-tooltip';


export default function App() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  return (
    <div>
      <div className='flex relative'>
        <div className='fixed right-4 bottom-4 z-[1000] bg-blue-600 text-2xl p-3 rounded-4xl cursor-pointer'
         data-tooltip-content='Settings' data-tooltip-id='4'>
          <FiSettings/>
          <Tooltip id='4'/>
        </div>
        {activeMenu ?
          (<div className='w-72 fixed dark:bg-gray-200 bg-white'> <Sidebar /> </div>)
          :
          (<div className='w-0 dark:bg-gray-700'><Sidebar /></div>)
        }
        <div className={` w-full min-h-screen ${activeMenu ? ' md:ml-72' : ' flex-2'}`} >
          <div className='fixed md:static bg-white navbar w-full'>
            <Navbar />
          </div>
        

        <div>
          <Routes>
            {/* Dashboard */}
            <Route path='/' element={<Ecommerce/>}/>
            <Route path='/ecommerce' element={<Ecommerce/>}/>
            
            {/* Pages */}\
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/employees' element={<Employees/>}/>
            <Route path='/customers' element={<Customers/>}/>

            {/* Apps */}
            <Route path='/kanban' element={<Kanban/>}/>
            <Route path='/editor' element={<Editor/>}/>
            <Route path='/calendar' element={<Calendar/>}/>
            <Route path='/color-picker' element={<ColorPicker/>}/>

            {/* Charts */}
            <Route path='/line' element={<Line/>}/>
            <Route path='/area' element={<Area/>}/>
            <Route path='/bar' element={<Bar/>}/>
            <Route path='/pie' element={<Pie/>}/>
            <Route path='/financial' element={<Financial/>}/>
            <Route path='/color-mapping' element={<ColorMapping/>}/>
            <Route path='/pyramid' element={<Pyramid/>}/>
            <Route path='/stacked' element={<Stacked/>}/>
          </Routes>
        </div>
      </div>
        </div>
    </div>
  )
}
