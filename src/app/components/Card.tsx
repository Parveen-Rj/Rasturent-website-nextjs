import React from "react";
const floningImageContentBlock = () => {
  return(
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w1/2 md:pr-10">
<h2 className="text-3xl font-bold mb-4 text-white">Delicious Food{" "}</h2>
<p className="text-white mb-4">
  {" "}
  Experience the dilicious food in town, made fresh ingredients and grilled to perfection</p>
    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transiti duration-200">
      Order Now
      </button> 
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
        {" "}
        coming soon: Our New Food Launches{" "}</h3> 
        <ul className="list-disc list-outside text-white">
          <li>
            {" "}
          <strong>Biryani:</strong> Discover the rich flavors of desi Biryani, a perfect blend of spices and tradition.
          </li>
          <br/>
          <li>
            {" "}
          <strong>Dumba karahi:</strong> 
          Savor the authentic taste of desi Dumba Karahi, a spicy and hearty mutton delight.
          </li>
          <br/>
          <li>
            {" "}
          <strong>Classic Pizza:</strong>Indulge in the deliciously cheesy and flavorful experience of classic pizza, loved by all.
          </li>
          <br/>
          <li>
            {" "}
          <strong>Zinger Burger:</strong>"Enjoy the crispy, juicy taste of a Zinger Burger – a perfect blend of spice and crunch."
          </li>
          <br/>
        </ul>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
<img src="/images/food.jpg"
alt="delicious burger"
className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
        </div>
      
    </section>

  )
}
export default floningImageContentBlock