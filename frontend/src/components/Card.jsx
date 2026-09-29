import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link to={`/movie/${movie._id}`}>
      <div className="cursor-pointer group">

        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-72 object-cover rounded-md
                     group-hover:scale-105 transition duration-300"
        />

        <h3 className="mt-2 text-sm font-semibold">
          {movie.title}
        </h3>

      </div>
    </Link>
  );
};

export default Card;