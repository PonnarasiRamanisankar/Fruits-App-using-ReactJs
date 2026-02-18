import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Apple from "./Apple";
import Mango from "./Mango";
import Watermelon from "./Watermelon";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/mango" element={<Mango />} />
        <Route path="/watermelon" element={<Watermelon />} />
      </Routes>
    </>
  );
}

export default App;

