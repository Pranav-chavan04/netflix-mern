import React from "react";
import MovieCard from "./Card";

const MovieRow = ({ title, movies }) => {
  return (
    <section className="mb-12">

      <div className="px-6 md:px-10 mb-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="shrink-0 w-37.5 sm:w-42.5 md:w-47.5 lg:w-52.5"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default MovieRow;