import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Homepage from "./Homepage"; // Import your Homepage component
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Ensure all routes are inside the Router */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
