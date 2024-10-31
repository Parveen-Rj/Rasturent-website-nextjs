import React from "react";

const products = [
  {
    id: 1,
    title: "Grilling brings street",
    category: "classic fixing",
    price: "1200.00",
    imageUrl:
      "https://i.pinimg.com/736x/42/0e/63/420e63bfa2ccfa90fbe1d970cc696bb8.jpg",
    bgColor: "bg-amber-500",
  },

  {
    id: 2,
    title: "Handi Biryani",
    category: "fiery Biryani",
    price: "200.00",
    imageUrl:
      "https://i.pinimg.com/736x/95/86/56/95865613eed291d8807a6b402e277b16.jpg",
    bgColor: "bg-teal-500",
  },

  {
    id: 3,
    title: "special Koyla karahi",
    category: "cedar Grilled",
    price: "2200.00",
    imageUrl:
      "https://i.pinimg.com/564x/1a/16/36/1a16363f6c90cefe382e772e8d968bb5.jpg",
    bgColor: "bg-amber-500",
  },
];
export default function ProductList() {
  return (
    /*<div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black,tranparent 50%",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1",
                opacity: 0.2,
              }}
            >

            </div>
            <img
              className="relative w-50"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}*/

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