import React from "react";
import useCounterStore from "shell/counterStore";

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  return (
    <div
      className="w-full min-h-screen bg-auto bg-no-repeat"
      
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
    </div>
  );
};

export default Homepage;
