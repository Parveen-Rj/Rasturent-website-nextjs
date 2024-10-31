import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { TbBackground } from "react-icons/tb";

const ProducCardGrid = () => {
    const productImages = [
    "https://i.pinimg.com/236x/66/77/c3/6677c3721448f20d5afdb86bf4043f32.jpg",
    "https://i.pinimg.com/236x/9d/8f/de/9d8fdeb849f2b910c264f8a6a43b6229.jpg",
"https://i.pinimg.com/564x/c4/3e/ab/c43eab1f5c1aa79d1f44547636b45228.jpg",
"https://i.pinimg.com/564x/12/30/54/123054c53254bc0925ff7be1c3361b67.jpg",
"https://i.pinimg.com/564x/ed/62/82/ed62826d50c671794e074c22a27288aa.jpg",
"https://i.pinimg.com/564x/86/f1/53/86f1530e08d8662c56436a8e0a93a7e3.jpg",
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