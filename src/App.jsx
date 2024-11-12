import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login"; // Import your Login component
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Homepage />
      <Login />
    </BrowserRouter>
  );
}

export default App;
