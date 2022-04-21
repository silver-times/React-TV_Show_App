import React from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ image, name, rating, id }) => {
  return (
    <Link
      to={`/single-show/${id}`}
      className="my-1 mx-auto cursor-pointer inline-block hover:scale-105"
    >
      <img src={image} alt={name} />
      <div className="text-sm text-center  bg-red-200 py-4 px-1 ">
        <h4 className="">{name}</h4>
        <h4 className="text-xs">{rating}</h4>
      </div>
    </Link>
  );
};

export default ShowCard;
