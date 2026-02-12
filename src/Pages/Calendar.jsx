import React, { useState } from "react";

export default function SimpleCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
};

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = [];

  // Empty cells before first day
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();

    days.push(
      <div
        key={day}
        className={`h-12 flex items-center justify-center rounded-xl cursor-pointer transition ${
          isToday
            ? "bg-blue-500 text-white font-semibold"
            : "hover:bg-gray-100"
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="px-3 py-1 rounded-xl bg-gray-100 hover:bg-gray-200"
          >
            ▶
          </button>

          <h2 className="text-xl font-semibold">
            {monthNames[month]} {year}
          </h2>

          <button
            onClick={nextMonth}
            className="px-3 py-1 rounded-xl bg-gray-100 hover:bg-gray-200"
          >
            ◀
          </button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day) => (
              <div key={day}>{day}</div>
            )
          )}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-sm">
          {days}
        </div>
      </div>
    </div>
  );
}

