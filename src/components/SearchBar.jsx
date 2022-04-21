import React, { useState, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(ShowsContext);

  const searchTermHandler = (e) => {
    e.preventDefault();
    searchShows(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="mb-4">
      <form className="flex" onSubmit={searchTermHandler}>
        <input
          className="bg-gray-50 border border-[#970102] text-gray-900 text-sm w-full p-2.5 "
          placeholder="Enter tv show name"
          required
          value={searchTerm}
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-[#970102] border border-[#970102] text-white px-16">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
