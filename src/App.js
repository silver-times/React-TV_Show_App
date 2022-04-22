import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SingleShowPage from "./pages/SingleShowPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/single-show/:id" element={<SingleShowPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
