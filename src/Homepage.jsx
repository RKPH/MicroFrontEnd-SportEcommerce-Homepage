import React from "react";
import useCounterStore from "shell/counterStore";

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  return (
    <div className="w-full min-h-screen bg-yellow-300">
      <h1 className="text-black text-lg uppercase">Hello Homepage Testing</h1>
      <p>Current Count: {count}</p>
      <button
        onClick={() => {
          console.log("Increase Count Called");
          increaseCount();
          console.log("Count after increase: ", count + 1); // Logs the anticipated next count
        }}
      >
        Count +1
      </button>
    </div>
  );
};

export default Homepage;
