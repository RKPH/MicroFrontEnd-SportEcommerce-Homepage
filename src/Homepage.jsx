import React from "react";
import useCounterStore from "shell/counterStore";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import ProductCard from "./Components/ProductCard";

const products = [
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "3.500.000₫",
    name: "Giày Dropset 3",
    category: "Performance",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "2.200.000₫",
    name: "Giày Adizero SL",
    category: "Running",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "3.900.000₫",
    name: "Giày Ultraboost Light",
    category: "Lifestyle",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "2.500.000₫",
    name: "Giày NMD R1 V2",
    category: "Originals",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "1.800.000₫",
    name: "Giày Forum Low",
    category: "Originals",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "2.800.000₫",
    name: "Giày Supernova",
    category: "Running",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "4.500.000₫",
    name: "Giày Terrex Swift R3 GTX",
    category: "Outdoor",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "3.000.000₫",
    name: "Giày 4DFWD 2",
    category: "Training",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "2.700.000₫",
    name: "Giày Predator Accuracy.3",
    category: "Football",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "5.000.000₫",
    name: "Giày Crazy 1 ADV",
    category: "Basketball",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/35c5e1c3d7cc45e49dcebd495d9c9198_9366/Giay_Dropset_3_trang_ID8635_02_standard_hover.jpg",
    price: "3.200.000₫",
    name: "Giày ZX 8000",
    category: "Lifestyle",
  },
];
const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  return (
    <main className="w-full h-full">
      {/* Hero banner */}
      <div
        className="w-full min-h-[870px] bg-contain bg-no-repeat relative"
        style={{
          backgroundImage: `url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/Homepage_banner_hero_alt_spec_generic_asset_d_1_01e19778e1.jpg")`,
        }}
      >
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
        <div
          className="
          absolute 
          bottom-5 left-5 
          md:bottom-52 md:left-32 
          md:translate-y-0 md:translate-x-0
          flex flex-col gap-2 items-start justify-center 
          text-center 
          md:items-start md:text-left 
          md:static md:flex-none
        "
        >
          <span className="text-lg tracking-wide font-[AdihausDIN] uppercase font-bold text-black bg-white px-2 py-1">
            MEMBERS GET MORE
          </span>
          <span className="text-sm tracking-wide font-[AdihausDIN] text-black bg-white px-2 py-1 max-w-[350px] text-wrap">
            Join adiClub for exclusive products, events, and prize draws during
            adiClub Days starting 24 Oct.
          </span>

          {/* Optional: Add buttons for free join and explore */}
          <div className="flex gap-4 mt-2">
            <button className="bg-white text-black px-4 py-2 uppercase w-1/2">
              Join for free{" "}
              <span>
                <TrendingFlatIcon />
              </span>
            </button>
            <button className="bg-white text-black border-2 px-4 py-2 uppercase w-1/2">
              Explore more{" "}
              <span>
                <TrendingFlatIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex gap-x-4 w-full bg-white px-5 pb-10  font-[AdihausDIN] text-base font-bold">
          <li className="p-3 border border-black hover:bg-black hover:text-white">
            DropSet
          </li>
          <li className="p-3 border border-black">Adizero</li>
          <li className="p-3 border border-black">New Arrivals</li>
          <li className="p-3 border border-black">Takewondo</li>
        </ul>

        <ul className="flex gap-x-2 overflow-x-auto w-full bg-slate-200 px-5 flex-nowrap">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Homepage;
