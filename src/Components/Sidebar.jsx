import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import { gridOrderImage, links } from '../Data/dummy.jsx';
import { StateContext } from '../Contexts/ContextProvider';


export default function Sidebar() {
  const { activeMenu , setActiveMenu , screenSize} = useContext(StateContext);
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-900 dark:text-black dark:hover:text-black hover:bg-gray-300 m-2';
  return (
    <div>
      <div className='ml-3 h-screen 
      md:overflow-hidden overflow-auto
      md:hover:overflow-auto pb-10'>
        {activeMenu && (<>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={handleCloseSideBar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900'>
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <button data-tooltip-id='1' data-tooltip-content='Menu' type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className='text-xl rounded-full p-2 hover:bg-gray-400 mt-4 block'>
              <MdOutlineCancel />
            </button>
            <Tooltip id='1' />
          </div>
          <div className='mt-10 '>
            {links?.map((item) => (
              <div key={item.title}>
                <p className='text-gray-800 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                <div>
                  {item.links?.map((link) => (
                    <NavLink
                      to={`${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) => isActive ? activeLink : normalLink }
                      >
                        {link.icon}
                        <span className='capitalize'>{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>)}
      </div>

      <button data-tooltip-id='2' data-tooltip-content=" hello">ssas</button>
      <Tooltip id='2' />
    </div>
  )
}
