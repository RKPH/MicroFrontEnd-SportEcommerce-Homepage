import React, { useState } from "react";
import useCounterStore from "shell/counterStore";
const Homepage = () => {
  const [count, setCount] = useState(0);
  const increaseCount = useCounterStore((state) => state.increaseCount); // Get increaseCount action
  return (
    <div>
      Hello Homepage Testting Fuck cần bull shit
      <button
        onClick={() => {
          increaseCount();
          console.log("testing purpose");
        }}
      >
        Count +1{" "}
      </button>
    </div>
  );
};

export default Homepage;
