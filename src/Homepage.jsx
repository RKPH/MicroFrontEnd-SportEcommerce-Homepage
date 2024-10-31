import React, { useState } from "react";
import useCounterStore from "shell/counterStore";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ProductCard from "./Components/ProductCard";
import "./Homepage.css";

const bannerUrl =
  "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4894144_CAM_Onsite_FW_24_Lo_Profile_Incubation_Hoyeon_1_Oct_SEA_CLP_GLP_Masthead_Banner_DT_2880x1280px_456b1f8c70.jpg";

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
  // Other product categories
];

const categories = ["DropSet", "Adizero", "New Arrivals", "Taekwondo"];

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);
  const [currentCategory, setCurrentCategory] = useState("DropSet");

  return (
    <main className="w-full h-full">
      {/* list 1 */}
      <div className="w-full my-2">
        {/* Categories Navigation */}
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold">
          {categories.map((category) => (
            <li
              key={category}
              className={`p-3 border border-black hover:bg-black hover:text-white cursor-pointer ${
                currentCategory === category ? "bg-black text-white" : ""
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Products for the currently selected category */}
        <div className="flex w-full items-center justify-center mt-2">
          <ul className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap">
            {products
              .filter((product) => product.category === currentCategory)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </ul>
        </div>
      </div>

      {/* banner */}
      <div className="w-full h-auto bg-cover bg-center my-2">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4894144_CAM_Onsite_FW_24_Lo_Profile_Incubation_Hoyeon_1_Oct_SEA_CLP_GLP_Masthead_Banner_DT_2880x1280px_456b1f8c70.jpg"
          className="w-full h-auto"
        />
      </div>

      {/* list 2 */}
      <div className="w-full my-2">
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold">
          {categories.map((category) => (
            <li
              key={category}
              className={`p-3 border border-black hover:bg-black hover:text-white cursor-pointer ${
                currentCategory === category ? "bg-black text-white" : ""
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <div className="flex w-full items-center justify-center">
          <ul className="flex gap-x-2 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap">
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
