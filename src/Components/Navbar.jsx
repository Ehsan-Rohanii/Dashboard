import React, { useContext, useEffect } from 'react';
import { StateContext } from '../Contexts/ContextProvider';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import avatar from '../Data/avatar.jpg';

// Import کامپوننت‌ها
import Cart from './Cart';
import Chat from './Chat';
import Notification from './Notification';
import UserProfile from './UserProfile';

// دکمه ناوبری
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    data-tooltip-id="tooltip"
    data-tooltip-content={title}
  >
    {icon}
    {dotColor && (
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
    )}
    <Tooltip id="tooltip" />
  </button>
);

export default function Navbar() {
  const { activeMenu, setActiveMenu, isClicked, handleClick , screenSize , setScreenSize} = useContext(StateContext);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize' , handleResize);

    handleResize();

    return () => window.removeEventListener('resize' , handleResize)
  },[]);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  },[screenSize])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      {/* Menu button */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(prev => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      {/* سایر دکمه‌ها */}
      <div className="flex items-center gap-2">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03c9d7"
          customFunc={() => handleClick('Notification')}
          color="blue"
          icon={<RiNotification3Line />}
        />

        {/* User profile */}
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-400 rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
          <span></span>
          <span className="text-gray-400 font-bold ml-1 text-14">Ehsan</span>
          <MdKeyboardArrowDown className="text-gray-400 font-bold ml-1 text-14" />
        </div>

        {/* نمایش کامپوننت‌ها */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.Notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}


