import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import ShowsContext from "../context/shows/showsContext";
import ShowCard from "../components/ShowCard";
import Loader from "../components/Loader";

const Homepage = () => {
  const { shows, loading } = useContext(ShowsContext);

  return (
    <div className="max-w-[1000px]  mx-auto py-2">
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {shows.map((show) => (
            <ShowCard
              key={show.show.id}
              name={show.show.name}
              rating={
                show.show.rating.average
                  ? show.show.rating.average
                  : "No Ratings"
              }
              image={
                show.show.image
                  ? show.show.image.medium
                  : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
              }
              id={show.show.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
