import { useState } from "react";
import employeesData from "../Data/employeesData";

export default function Employees() {
  const [employees, setEmployees] = useState(
    employeesData.map((e) => ({ ...e, selected: false }))
  );
  const [newEmployee, setNewEmployee] = useState({
    employees: "",
    designation: "",
    country: "",
    hireDate: "",
    reportsTo: "",
  });

  const toggleSelect = (id) => {
    setEmployees(
      employees.map((e) =>
        e.id === id ? { ...e, selected: !e.selected } : e
      )
    );
  };

  const deleteSelected = () => {
    setEmployees(employees.filter((e) => !e.selected));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const addEmployee = (e) => {
    e.preventDefault();
    if (
      !newEmployee.employees ||
      !newEmployee.designation ||
      !newEmployee.country ||
      !newEmployee.hireDate ||
      !newEmployee.reportsTo
    )
      return;

    const id = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
    setEmployees([...employees, { id, ...newEmployee, selected: false }]);
    setNewEmployee({
      employees: "",
      designation: "",
      country: "",
      hireDate: "",
      reportsTo: "",
    });
  };

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">کارمندان</h1>

      {/* فرم اضافه کردن کارمند جدید */}
      <form
        onSubmit={addEmployee}
        className="mb-6 bg-gray-50 p-4 rounded shadow flex flex-col gap-2"
      >
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            name="employees"
            placeholder="نام کارمند"
            value={newEmployee.employees}
            onChange={handleInputChange}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            name="designation"
            placeholder="عنوان شغلی"
            value={newEmployee.designation}
            onChange={handleInputChange}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            name="country"
            placeholder="کشور"
            value={newEmployee.country}
            onChange={handleInputChange}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            name="hireDate"
            placeholder="تاریخ استخدام"
            value={newEmployee.hireDate}
            onChange={handleInputChange}
            className="border p-2 rounded flex-1"
          />
          <input
            type="text"
            name="reportsTo"
            placeholder="مدیر مستقیم"
            value={newEmployee.reportsTo}
            onChange={handleInputChange}
            className="border p-2 rounded flex-1"
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          اضافه کردن کارمند
        </button>
      </form>

      <button
        onClick={deleteSelected}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        حذف کارمندان انتخاب شده
      </button>

      {/* جدول کارمندان */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border-b text-center">انتخاب</th>
              <th className="p-2 border-b text-center">کارمندان</th>
              <th className="p-2 border-b text-center">عنوان شغلی</th>
              <th className="p-2 border-b text-center">کشور</th>
              <th className="p-2 border-b text-center">تاریخ استخدام</th>
              <th className="p-2 border-b text-center">مدیر مستقیم</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e.id} className="text-center hover:bg-gray-50">
                <td className="p-2 border-b">
                  <input
                    type="checkbox"
                    checked={e.selected}
                    onChange={() => toggleSelect(e.id)}
                  />
                </td>
                <td className="p-2 border-b">{e.employees}</td>
                <td className="p-2 border-b">{e.designation}</td>
                <td className="p-2 border-b">{e.country}</td>
                <td className="p-2 border-b">{e.hireDate}</td>
                <td className="p-2 border-b">{e.reportsTo}</td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-gray-500">
                  هیچ کارمندی وجود ندارد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}




