import React from "react";
import useCounterStore from "shell/counterStore";

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1>Hello Homepage Testing</h1>
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
