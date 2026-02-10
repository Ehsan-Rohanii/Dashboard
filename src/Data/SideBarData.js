import { MdShoppingCart, MdPeople, MdStorefront } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

export const sidebarData = [
  {
    title: "اصلی",
    links: [
      {
        name: "فروشگاه",
        path: "/ecommerce",
        icon: MdStorefront
      }
    ]
  },
  {
    title: "مدیریت",
    links: [
      {
        name: "سفارش‌ها",
        path: "/orders",
        icon: MdShoppingCart
      },
      {
        name: "کارمندان",
        path: "/employees",
        icon: MdPeople
      },
      {
        name: "مشتریان",
        path: "/customers",
        icon: FaUsers
      }
    ]
  }
];

