import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "shell/counterStore";

const Homepage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Hello Homepage Testting Fuck cần bull shit
      <button onClick={() => dispatch(increaseCount())}>Count +1 </button>
    </div>
  );
};

export default Homepage;
