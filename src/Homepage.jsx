import React, { useState, useEffect } from "react";
import useCounterStore from "shell/counterStore";
import ProductCard from "./Components/ProductCard";
import "./Homepage.css";

const bannerUrl =
  "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4894144_CAM_Onsite_FW_24_Lo_Profile_Incubation_Hoyeon_1_Oct_SEA_CLP_GLP_Masthead_Banner_DT_2880x1280px_456b1f8c70.jpg";

// Sample product data with multiple categories
const categories = [
  "DropSet",
  "Adizero",
  "New Arrivals",
  "Taekwondo",
  "Running",
  "Football",
  "Basketball",
  "Training",
  "Lifestyle",
  "Outdoor",
  "Hiking",
  "Yoga",
  "Cycling",
  "Swimming",
  "Crossfit",
  "Kids",
  "Women",
  "Men",
  "Accessories",
  "Apparel",
];

const products = Array.from({ length: 40 }, (_, index) => {
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  return {
    imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Product_${
      index + 1
    }.jpg`,
    price: `${(3000000 + index * 100000).toLocaleString()}₫`,
    name: `Giày Product ${index + 1}`,
    category: randomCategory, // Randomly assign a category from the categories array
  };
});

const getRandomCategories = (categories, count) => {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  useEffect(() => {
    const initialCategories = getRandomCategories(categories, 4);
    setCurrentCategories(initialCategories);
    setSelectedCategory(initialCategories[0]); // Set default selected category
  }, []);

  return (
    <main className="w-full h-full">
      {/* Category Navigation */}
      <div className="w-full my-2">
        <ul className="flex gap-x-4 w-full bg-white px-5 font-[AdihausDIN] text-base font-bold">
          {currentCategories.map((category) => (
            <li
              key={category}
              className={`p-3 border border-black cursor-pointer ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)} // Update selected category on click
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Products for the currently selected category */}
        <div className="flex w-full items-center justify-center mt-2">
          <ul className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar">
            {products
              .filter((product) => product.category === selectedCategory) // Filter based on selected category
              .map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
          </ul>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full h-auto bg-cover bg-center my-2">
        <img src={bannerUrl} className="w-full h-auto" alt="Banner" />
      </div>

      {/* Repeat for more lists or sections as needed */}
    </main>
  );
};

export default Homepage;
