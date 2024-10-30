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
      {/* Hero banner */}
<div className="relative w-full h-1/2">
  <picture>
    <img
      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/Homepage_banner_hero_alt_spec_generic_asset_d_2_2f0d619960.jpg"
      alt="Banner Image"
      loading="eager"
      fetchpriority="high"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </picture>

  <button
    className="border-black border-2 px-3 py-1 sm:px-4 sm:py-2 absolute top-4 left-4 sm:top-5 sm:left-5"
    onClick={() => {
      console.log("Increase Count Called");
      increaseCount();
    }}
  >
    Count +1
  </button>

  {/* Text Block */}
  <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 md:bottom-1/4 md:left-1/4 flex flex-col gap-1 sm:gap-2 items-start justify-center text-left">
    <span className="text-sm sm:text-lg tracking-wide font-[AdihausDIN] uppercase font-bold text-black bg-white px-2 py-1">
      MEMBERS GET MORE
    </span>
    <span className="text-xs sm:text-sm md:text-base tracking-wide font-[AdihausDIN] text-black bg-white px-2 py-1 max-w-[250px] sm:max-w-[300px] md:max-w-[350px]">
      Join adiClub for exclusive products, events, and prize draws during
      adiClub Days starting 24 Oct.
    </span>

    <div className="flex gap-3 mt-1 sm:gap-4 sm:mt-2">
      <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 uppercase">
        Join for free <TrendingFlatIcon />
      </button>
      <button className="bg-white text-black border-2 px-3 py-1 sm:px-4 sm:py-2 uppercase">
        Explore more <TrendingFlatIcon />
      </button>
    </div>
  </div>
</div>


      <div>
        {/* Categories Navigation */}
        <ul className="flex gap-x-2 sm:gap-x-4 w-full bg-white px-4 sm:px-5 font-[AdihausDIN] text-sm sm:text-base font-bold">
          {categories.map((category) => (
            <li
              key={category}
              className={`p-2 sm:p-3 border border-black hover:bg-black hover:text-white cursor-pointer ${
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
          <ul className="flex gap-x-2 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap">
            {products
              .filter((product) => product.category === currentCategory)
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </ul>
        </div>

        <div className="w-full h-80 sm:h-96 bg-yellow-50"></div>
      </div>
    </main>
  );
};

export default Homepage;
