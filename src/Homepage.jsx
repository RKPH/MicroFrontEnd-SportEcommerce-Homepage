import React, { useState } from "react";
import useCounterStore from "shell/counterStore";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ProductCard from "./Components/ProductCard";

// Sample product data with 10 items per category
const products = [
  // DropSet Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_${
      index + 1
    }.jpg`,
    price: `${(3000000 + index * 100000).toLocaleString()}₫`,
    name: `Giày Dropset ${index + 1}`,
    category: "DropSet",
  })),

  // Adizero Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Adizero_${
      index + 1
    }.jpg`,
    price: `${(2200000 + index * 100000).toLocaleString()}₫`,
    name: `Giày Adizero ${index + 1}`,
    category: "Adizero",
  })),

  // New Arrivals Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_New_Arrival_${
      index + 1
    }.jpg`,
    price: `${(3900000 + index * 100000).toLocaleString()}₫`,
    name: `Giày New Arrival ${index + 1}`,
    category: "New Arrivals",
  })),

  // Taekwondo Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Taekwondo_${
      index + 1
    }.jpg`,
    price: `${(2500000 + index * 100000).toLocaleString()}₫`,
    name: `Giày Taekwondo ${index + 1}`,
    category: "Taekwondo",
  })),
];

const categories = ["DropSet", "Adizero", "New Arrivals", "Taekwondo"];

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  // State for currently selected category
  const [currentCategory, setCurrentCategory] = useState("DropSet");

  return (
    <main className="w-full h-full">
      {/* list 1 */}
      <div className="w-full my-2">
        {/* Categories Navigation */}
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold ">
          {categories.map((category) => (
            <li
              key={category}
              className={`p-3 border border-black hover:bg-black hover:text-white cursor-pointer ${
                currentCategory === category ? "bg-black text-white" : ""
              }`}
              onClick={() => setCurrentCategory(category)} // Handle category change
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Products for the currently selected category */}
        <div className="flex w-full items-center justify-center mt-2">
          <ul className="flex gap-x-4 overflow-x-auto w-[98%] py-2    min-h-fit flex-nowrap">
            {products
              .filter((product) => product.category === currentCategory)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </ul>
        </div>

       
      </div>
      {/* list 2 */}
      <div className="w-full my-2">
        {/* Categories Navigation */}
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold ">
          {categories.map((category) => (
            <li
              key={category}
              className={`p-3 border border-black hover:bg-black hover:text-white cursor-pointer ${
                currentCategory === category ? "bg-black text-white" : ""
              }`}
              onClick={() => setCurrentCategory(category)} // Handle category change
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Products for the currently selected category */}
        <div className="flex w-full items-center justify-center ">
          <ul className="flex gap-x-2 overflow-x-auto w-[98%] py-2    min-h-fit flex-nowrap">
            {products
              .filter((product) => product.category === currentCategory)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </ul>
        </div>

        
      </div>
    </main>
  );
};

export default Homepage;
