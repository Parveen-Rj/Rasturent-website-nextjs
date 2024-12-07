import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";

const ProducCardGrid = () => {
    const productImages = [
    "/images/beef pulao.jpg",
    "/images/beter chikan.jpg",
"/images/chapli kabab.jpg",
"/images/Chicken Tikka.jpg",
"/images/haleem.jpg",
"/images/paya.jpg",
];
return (
<div className="relative text-center p-10">
<div className="absolute inset-0"
style={{
    backgroundImage:`url('https://i.pinimg.com/236x/12/03/bd/1203bda8dd87906cd2709687811683e1.jpg')`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    zIndex:0,
    opacity:0.1,
}}/>

<h1 className="font-bol text-4xl mb-4 text-white z-10 relative">Most Requested items</h1>
<h1 className="tex-3xl text-white z-10 relative">Order Now..!</h1>
<section
id="Project"
className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
>
    {Array.from({length: 6}).map((_, index) => (
<div
key={index}
className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
<a href="#">
<img
src={productImages[index]}
alt={`Product ${index + 1}`}
className="h-80 w-72 object-cover rounded-t-xl"/>
<div className="px-4 py w-72">
    <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
<p className=" text-lg font-bold text-red-700 truncate block capitalize">Food Name {index + 1}</p>
<div className="flex items-center">
<p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>
<del>
    <br/>
    <p className="text-sm text-blue-800 cursor-auto ml-2"> {" "} $199</p>
</del>

<div className="ml-auto">
<FaShoppingCart className="w-5 h-5 text-blue-800"/>
</div>
</div>


</div>
</a>
</div>
    ))}

</section>





</div>

)
}

export default ProducCardGrid;