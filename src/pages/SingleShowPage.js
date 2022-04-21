import React, { useEffect, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const SingleShowPage = ({ match }) => {
  const { getSingleShow, loading, singleShow } = useContext(ShowsContext);
  const { id } = useParams();

  useEffect(() => {
    getSingleShow(id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex m-8">
          <img
            className="mr-8"
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
            }
            alt={singleShow.name}
          />
          <div className="">
            <h1 className="text-3xl uppercase font-bold mt-4">
              {singleShow.name}
            </h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span
                  className="inline-block rounded-lg mr-1 my-4  px-[17px] py-[12px] bg-[#970102] text-white"
                  key={genre}
                >
                  {genre}
                </span>
              ))}

            <p className="mt-2">
              <span className="font-bold">Status: </span>{" "}
              {singleShow.status && singleShow.status}
            </p>

            <p className="mt-2">
              <span className="font-bold">Language: </span>
              {singleShow.language}
            </p>

            <p className="mt-2">
              {" "}
              <span className="font-bold">Summary: </span>
              {singleShow.summary && removeTags(singleShow.summary)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleShowPage;
