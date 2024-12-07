

import React from "react";
import { FaDelicious } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Grilling brings street",
    category: "classic fixing",
    price: "1200.00",
    imageUrl:
      "/images/moton boti.jpg",
    bgColor: "bg-teal-500",
  },

  {
    id: 2,
    title: "Paya Curry",
    category: "Delicious Desi food",
    price: "200.00",
    imageUrl:
      "/images/Pakistani Paya Curry.jpg",
    bgColor: "bg-amber-500",
  },

  {
    id: 3,
    title: "special Koyla karahi",
    category: "cedar Grilled",
    price: "2200.00",
    imageUrl:
    "/images/Karahi Gosht.jpg",
    bgColor: "bg-teal-500",
  },
];
export default function ProductList() {
  return (
    
<div className="p-1 flex flex-wrap items-center justify-center mb-6">
  {products.map((product) => (
    <div
      key={product.id}
      className={`flex flex-col items-center m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm transform transition duration-300 hover:scale-105`} // Hover effect on card
    >
      <img
        className="w-32 h-32 object-cover mt-4 rounded-full transition-transform duration-300 group-hover:scale-110" // Hover effect on image
        src={product.imageUrl}
        alt={product.title}
      />

      <div className="text-center text-white px-4 py-6">
        <span className="block opacity-75">{product.category}</span>
        <div className="flex justify-between items-center mt-2">
          <span className="block font-semibold text-lg">{product.title}</span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-1 ml-2">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}