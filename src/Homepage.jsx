import React, { useState, useEffect, useRef } from "react";
import useCounterStore from "shell/counterStore";

import ProductCard from "./Components/ProductCard";
import "./Homepage.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const bannerUrl =
  "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4894144_CAM_Onsite_FW_24_Lo_Profile_Incubation_Hoyeon_1_Oct_SEA_CLP_GLP_Masthead_Banner_DT_2880x1280px_456b1f8c70.jpg";

// Sample product data with multiple categories
const categories = [
  "DropSet",
  "Adizero",
  "New Arrivals",
  "Taekwondo" /* other categories */,
];

const generateProducts = (categories) => {
  const products = [];
  const categoryCount = {};

  for (let i = 0; i < 200; i++) {
    const category = categories[i % categories.length];
    if (!categoryCount[category]) categoryCount[category] = 1;

    products.push({
      imgSrc: `https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Product_${
        i + 1
      }.jpg`,
      price: `${(3000000 + i * 100000).toLocaleString()}₫`,
      name: `Giày ${category} ${categoryCount[category]}`,
      category: category,
    });

    categoryCount[category]++;
  }

  return products;
};

const products = generateProducts(categories);
const getRandomCategories = (categories, count) => {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const listRef = useRef(null);

  useEffect(() => {
    const initialCategories = getRandomCategories(categories, 4);
    setCurrentCategories(initialCategories);
    setSelectedCategory(initialCategories[0]);
  }, []);

  const handleScroll = () => {
    const list = listRef.current;
    setShowPrev(list.scrollLeft > 0);
    setShowNext(list.scrollWidth > list.scrollLeft + list.clientWidth);
  };

  const scrollLeft = () => {
    listRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
      <main className="w-full h-full">
        <div className="w-full h-auto relative mb-5">
          {/* Banner */}
          <div className="_fill-image_154ez_1" data-auto-id="picture">
            <picture>
              <source
                  srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4985239_Mini_Masthead_DT_2880x720_1_4869aa5588.jpg"
                  media="(min-width: 960px)"
                  width="2880"
                  height="720"
              />
              <source
                  srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/4985239_Mini_Masthead_MO_720x920_15614a9463.jpg"
                  media="(min-width: 768px)"
                  width="720"
                  height="920"
              />
              <source
                  srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_768,w_768/4985239_Mini_Masthead_MO_720x920_770a023e6d.jpg"
                  media="(max-width: 767px)"
                  width="720"
                  height="920"
              />
              <img
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/4985239_Mini_Masthead_DT_2880x720_1_4869aa5588.jpg"
                  alt=""
                  loading="eager"
                  fetchPriority="high"
              />
            </picture>
          </div>

          {/* Text content positioned at the bottom-left corner */}
          <div className="absolute bottom-0 left-0 p-8 space-y-4">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              CITY ESCAPE
            </h1>
            <p className="text-white text-lg">
              Outdoor-inspired styles for city-wide adventures.
            </p>
            <button
                className="bg-white text-black py-2 px-6 text-lg font-semibold rounded hover:bg-gray-300 transition-all duration-300 flex items-center gap-2">
              SHOP NOW <span>&rarr;</span>
            </button>
          </div>
        </div>
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
                    onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
            ))}
          </ul>

          {/* Product List with Navigation */}
          <div className="flex w-full items-center justify-center mt-2 relative">
            {showPrev && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 p-4 px-5 bg-white text-black border border-black"
                >
                  <ArrowBackIcon/>
                </button>
            )}

            <ul
                ref={listRef}
                onScroll={handleScroll}
                className="flex gap-x-4 overflow-x-auto w-[98%] py-2 min-h-fit flex-nowrap custom-scrollbar"
            >
              {products
                  .filter((product) => product.category === selectedCategory)
                  .slice(0, 10)
                  .map((product, index) => (
                      <ProductCard key={index} {...product} />
                  ))}
            </ul>

            {showNext && (
                <button
                    onClick={scrollRight}
                    className="absolute right-0 z-10 p-4 px-5 bg-white text-black border border-black"
                >
                  <ArrowForwardIcon/>
                </button>
            )}
          </div>
        </div>

        <div className="w-full h-auto bg-cover bg-center my-2">
          <img src={bannerUrl} className="w-full h-auto" alt="Banner"/>
        </div>
      </main>
  );
};

export default Homepage;
