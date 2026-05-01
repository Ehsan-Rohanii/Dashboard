import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./Components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
  Line,
  Pyramid,
  Stacked,
} from "./Pages";
import { StateContext } from "./Contexts/ContextProvider";
import { Tooltip } from "react-tooltip";

export default function App() {
  const { activeMenu } = useContext(StateContext);

  return (
    <div dir="rtl">
      <div className="flex relative">
        {/* ⚙️ Settings Button */}
        <div
          className="fixed left-4 bottom-4 z-[1000] bg-blue-600 text-2xl p-3 rounded-full cursor-pointer"
          data-tooltip-id="settings"
          data-tooltip-content="تنظیمات"
        >
          <FiSettings />
          <Tooltip id="settings" />
        </div>

        {/*  Sidebar (Right) */}
        {activeMenu && (
          <div className="w-72 fixed right-0 top-0 h-screen bg-white dark:bg-gray-200 z-50">
            <Sidebar />
          </div>
        )}

        {/*  Main Content */}
        <div
          className={`w-full min-h-screen ${
            activeMenu ? "md:mr-72" : ""
          }`}
        >
          {/* Navbar */}
          <div className="fixed md:static bg-white navbar w-full z-40">
            <Navbar />
          </div>

          {/* Pages */}
          <div className="pt-16 px-4">
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

