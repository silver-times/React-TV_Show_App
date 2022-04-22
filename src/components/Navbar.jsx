import React from "react";
import { Link } from "react-router-dom";
import { BiSlideshow } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#970102] text-white">
      <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 py-4">
        <div className="">
          <Link to="/" className="flex items-end">
            <div className=" mr-1">
              <BiSlideshow size="3rem" />
            </div>
            <h1 className="text-3xl">reactSHOWS</h1>
          </Link>
        </div>
        <div className="flex mr-4 text-2xl">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
