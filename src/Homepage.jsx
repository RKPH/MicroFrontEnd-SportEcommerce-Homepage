import React, { useState } from "react";
import useCounterStore from "shell/counterStore";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ProductCard from "./Components/ProductCard";
import "./Homepage.css";

const bannerUrl =
  "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4894144_CAM_Onsite_FW_24_Lo_Profile_Incubation_Hoyeon_1_Oct_SEA_CLP_GLP_Masthead_Banner_DT_2880x1280px_456b1f8c70.jpg";

const products = [
  // DropSet Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset.jpg`, // Same image for all DropSet products
    price: `${(3000000 + index * 100000).toLocaleString()}₫`,
    name: `Giày Dropset ${index + 1}`,
    category: "DropSet",
  })),

  // Adizero Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Adizero.jpg`, // Same image for all Adizero products
    price: `${(3200000 + index * 100000).toLocaleString()}₫`, // Different starting price
    name: `Giày Adizero ${index + 1}`,
    category: "Adizero",
  })),

  // New Arrivals Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_New_Arrivals.jpg`, // Same image for all New Arrivals products
    price: `${(3400000 + index * 100000).toLocaleString()}₫`, // Different starting price
    name: `Giày New Arrivals ${index + 1}`,
    category: "New Arrivals",
  })),

  // Taekwondo Products
  ...Array.from({ length: 10 }, (_, index) => ({
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Taekwondo.jpg`, // Same image for all Taekwondo products
    price: `${(3600000 + index * 100000).toLocaleString()}₫`, // Different starting price
    name: `Giày Taekwondo ${index + 1}`,
    category: "Taekwondo",
  })),
];

console.log(products);

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
          <ul className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar">
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

      <div></div>

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
          <ul className="flex gap-x-2 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar">
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
