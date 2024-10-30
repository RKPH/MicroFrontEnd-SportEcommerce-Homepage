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
      <div className="w-full">
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/Homepage_banner_hero_alt_spec_generic_asset_d_1_01e19778e1.jpg"
          className="h-[850px] w-full relative"
        />
        <button
          className="border-black border-2 px-4 py-2 absolute top-5 left-5"
          onClick={() => {
            console.log("Increase Count Called");
            increaseCount();
          }}
        >
          Count +1
        </button>

        {/* Text Block */}
        <div className="absolute bottom-5 left-5 md:bottom-52 md:left-32 flex flex-col gap-2 items-start justify-center text-center md:items-start md:text-left md:static md:flex-none">
          <span className="text-lg tracking-wide font-[AdihausDIN] uppercase font-bold text-black bg-white px-2 py-1">
            MEMBERS GET MORE
          </span>
          <span className="text-sm tracking-wide font-[AdihausDIN] text-black bg-white px-2 py-1 max-w-[350px] text-wrap">
            Join adiClub for exclusive products, events, and prize draws during
            adiClub Days starting 24 Oct.
          </span>

          <div className="flex gap-4 mt-2">
            <button className="bg-white text-black px-4 py-2 uppercase">
              Join for free <TrendingFlatIcon />
            </button>
            <button className="bg-white text-black border-2 px-4 py-2 uppercase ">
              Explore more <TrendingFlatIcon />
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* Categories Navigation */}
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold">
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

        <div className="w-full h-96 bg-yellow-50"></div>
      </div>
    </main>
  );
};

export default Homepage;
