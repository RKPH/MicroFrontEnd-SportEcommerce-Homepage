import React from "react";
import useCounterStore from "shell/counterStore";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  return (
    <div
      className="w-full min-h-screen bg-auto bg-no-repeat relative"
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
          <button className="bg-white text-black px-4 py-2 uppercase W-1/2">
            Join for free{" "}
            <span>
              <TrendingFlatIcon />
            </span>
          </button>
          <button className="bg-white text-black border-2 px-4 py-2 uppercase W-1/2">
            Explore more{" "}
            <span>
              <TrendingFlatIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
