import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { Tooltip } from "react-tooltip";

import { sidebarData } from "../Data/SideBarData";
import { StateContext } from "../Contexts/ContextProvider";

export default function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useContext(StateContext);
  const navigate = useNavigate();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-4 pr-4 pt-3 pb-2.5 m-2 rounded-lg bg-blue-600 text-white text-md";

  const normalLink =
    "flex items-center gap-4 pr-4 pt-3 pb-2.5 m-2 rounded-lg text-gray-700 hover:bg-gray-200 text-md";

  return (
    <div dir="rtl" className="h-screen bg-gray-200">
      <div className="ml-3 h-full md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            {/* ===== Header ===== */}
            <div className="flex justify-between items-center">
              <div
                onClick={() => {
                  navigate("/ecommerce");
                  handleCloseSidebar();
                }}
                className="flex items-center gap-3 mr-3 mt-4 text-xl font-extrabold cursor-pointer text-slate-800"
              >
                <SiShopware />
                <span>نام شرکت</span>
              </div>

              <button
                data-tooltip-id="close-menu"
                data-tooltip-content="بستن منو"
                onClick={() => setActiveMenu(false)}
                className="text-xl rounded-full p-2 hover:bg-gray-300 mt-4"
              >
                <MdOutlineCancel />
              </button>
              <Tooltip id="close-menu" />
            </div>

            {/* ===== Menu Items ===== */}
            <div className="mt-10">
              {sidebarData.map((section) => (
                <div key={section.title}>
                  <p className="text-gray-500 mr-4 mt-6 mb-2 text-sm">
                    {section.title}
                  </p>

                  {section.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={handleCloseSidebar}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <Icon className="text-xl" />
                        <span>{link.name}</span>
                      </NavLink>
                    );
                  })}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}


