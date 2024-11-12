import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Homepage from "./Homepage";
import "./App.css";

function App() {


  return (
    <Router>
      <Routes>
        {/* Use the element prop to render components */}
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
