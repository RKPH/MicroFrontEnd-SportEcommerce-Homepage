import React, { useState } from "react";

import useCounterStore from "shell/counterStore"; // Correct import in remote

const Homepage = () => {
  const increaseCount = useCounterStore((state) => state.increaseCount); // Get increaseCount action
  console.log(increaseCount);
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
