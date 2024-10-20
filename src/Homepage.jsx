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
      <div className="md:bottom-52 md:left-32  md:absolute  sm:flex sm:justify-center  max-w-[550px]">
        <span className="text-base tracking-wide  font-[AdihausDIN] uppercase font-bold font text-black bg-white px-1 py-1 my-1">
          MEMBERS GET MORE
        </span>
        <span className="text-sm inline-block tracking-wide  font-[AdihausDIN] font-normal font text-black bg-white px-1 py-1 my-1">
          Join adiClub for exclusive products, events, and prize draws during
          adiClub Days starting 24 Oct.
        </span>
      </div>
    </div>
  );
};

export default Homepage;
