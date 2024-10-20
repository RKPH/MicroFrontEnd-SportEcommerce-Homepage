import React, { useState } from "react";

import { increaseCount } from "shell/counterStore";

const Homepage = () => {
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
