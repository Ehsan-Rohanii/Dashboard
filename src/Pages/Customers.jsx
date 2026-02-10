import { useState } from "react";
import customersData from "../Data/CustomersData";

export default function Customers() {
  const [customers, setCustomers] = useState(
    customersData.map((c) => ({ ...c, selected: false }))
  );
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    project: "",
    status: "",
    weeks: "",
    budget: "",
  });

  const toggleSelect = (id) => {
    setCustomers(customers.map((c) => c.id === id ? { ...c, selected: !c.selected } : c));
  };

  const deleteSelected = () => {
    setCustomers(customers.filter((c) => !c.selected));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const addCustomer = (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.project || !newCustomer.status || !newCustomer.weeks || !newCustomer.budget) return alert("لطفا همه فیلد ها را پر کنید");

    const id = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
    setCustomers([...customers, { id, ...newCustomer, selected: false }]);
    setNewCustomer({ name: "", project: "", status: "", weeks: "", budget: "" });
  };

  return (
    <div className="p-8" dir="rtl">
      <h1 className="text-2xl font-bold mb-4">مشتریان</h1>

      {/* فرم اضافه کردن مشتری جدید */}
      <form onSubmit={addCustomer} className="mb-6 bg-gray-50 p-4 rounded shadow flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
          <input type="text" name="name" placeholder="نام مشتری" value={newCustomer.name} onChange={handleInputChange} className="border p-2 rounded flex-1"/>
          <input type="text" name="project" placeholder="نام پروژه" value={newCustomer.project} onChange={handleInputChange} className="border p-2 rounded flex-1"/>
          <input type="text" name="status" placeholder="وضعیت" value={newCustomer.status} onChange={handleInputChange} className="border p-2 rounded flex-1"/>
          <input type="number" name="weeks" placeholder="هفته‌ها" value={newCustomer.weeks} onChange={handleInputChange} className="border p-2 rounded flex-1"/>
          <input type="number" name="budget" placeholder="بودجه" value={newCustomer.budget} onChange={handleInputChange} className="border p-2 rounded flex-1"/>
        </div>
        <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          اضافه کردن مشتری
        </button>
      </form>

      {/* دکمه حذف */}
      <button onClick={deleteSelected} className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        حذف مشتریان انتخاب شده
      </button>

      {/* جدول */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border-b text-center">انتخاب</th>
              <th className="p-2 border-b text-center">نام</th>
              <th className="p-2 border-b text-center">نام پروژه</th>
              <th className="p-2 border-b text-center">وضعیت</th>
              <th className="p-2 border-b text-center">هفته‌ها</th>
              <th className="p-2 border-b text-center">بودجه</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="text-center hover:bg-gray-50">
                <td className="p-2 border-b">
                  <input type="checkbox" checked={c.selected} onChange={() => toggleSelect(c.id)} />
                </td>
                <td className="p-2 border-b">{c.name}</td>
                <td className="p-2 border-b">{c.project}</td>
                <td className="p-2 border-b">{c.status}</td>
                <td className="p-2 border-b">{c.weeks}</td>
                <td className="p-2 border-b">{c.budget}</td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-4 text-gray-500">هیچ مشتری‌ای وجود ندارد</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// https://chatgpt.com/share/698a1654-95ac-8001-8212-594248496518
