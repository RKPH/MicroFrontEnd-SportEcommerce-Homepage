import React from "react";
import useCounterStore from "shell/counterStore";

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
        className="border-black border-2 px-2 py-2"
        onClick={() => {
          console.log("Increase Count Called");
          increaseCount();
          // Count will update in the UI automatically, no need to log it here
        }}
      >
        Count +1
      </button>
      <div className="bottom-10 left-0 absolute h-20 w-1/3 bg-teal-200"></div>
    </div>
  );
};

export default Homepage;
