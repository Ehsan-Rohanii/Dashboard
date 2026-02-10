import React, { useState } from "react";
import { ordersData } from "../Data/OrdersData";

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [selectedIds, setSelectedIds] = useState([]);
  const [product, setProduct] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("در انتظار");

  const addOrder = () => {
    if (!product || !customer || !price) {
      alert("لطفاً نام محصول، نام مشتری و قیمت را وارد کنید");
      return;
    }
    const newId = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1001;
    const newOrder = {
      id: newId,
      product,
      customer,
      price: parseInt(price),
      status,
    };
    setOrders([...orders, newOrder]);
    setProduct("");
    setCustomer("");
    setPrice("");
    setStatus("در انتظار");
  };

  const deleteSelected = () => {
    if (selectedIds.length === 0) {
      alert("لطفاً یک یا چند سفارش را انتخاب کنید");
      return;
    }
    setOrders(orders.filter((order) => !selectedIds.includes(order.id)));
    setSelectedIds([]);
  };

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="p-6">
      {/* فرم اضافه کردن سفارش */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <input
          type="text"
          placeholder="نام محصول"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="نام مشتری"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <input
          type="number"
          placeholder="قیمت"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <select
          value={status}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="در انتظار">در انتظار</option>
          <option value="پرداخت شده">پرداخت شده</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={addOrder}
        >
          اضافه کردن
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={deleteSelected}
        >
          حذف سفارش
        </button>
      </div>

      {/* جدول سفارش‌ها */}
      <div className="overflow-auto border rounded shadow-sm">
        <table className="w-full text-right min-w-max border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">انتخاب</th>
              <th className="border px-4 py-2">شناسه سفارش</th>
              <th className="border px-4 py-2">نام محصول</th>
              <th className="border px-4 py-2">نام مشتری</th>
              <th className="border px-4 py-2">قیمت</th>
              <th className="border px-4 py-2">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className={`hover:bg-gray-100 ${
                  selectedIds.includes(order.id) ? "bg-gray-300" : ""
                }`}
              >
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(order.id)}
                    onChange={() => toggleSelect(order.id)}
                  />
                </td>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">{order.price.toLocaleString()}</td>
                <td className="border px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}




