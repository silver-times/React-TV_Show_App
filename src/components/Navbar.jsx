import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#970102] text-white">
      <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 py-4">
        <h1 className="w-full text-3xl font-bold">REACT SHOWS</h1>
        <ul className="flex mr-4 text-2xl">
          <li className="mr-4">Home</li>
          <li className="">About</li>
          <li className="">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
