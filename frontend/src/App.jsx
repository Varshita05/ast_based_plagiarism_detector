import { useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import History from "./pages/History";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/report" element={<Report />} />
         <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;