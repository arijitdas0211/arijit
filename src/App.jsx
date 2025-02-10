import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {

  return (
    <>
      <Navbar />

      {/* Navigation */}
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/about" element={<About />}></Route>
        <Route index path="/portfolio" element={<Portfolio />}></Route>
        <Route index path="/contact" element={<Contact />}></Route>
      </Routes>

      
      
    </>
  );
}

