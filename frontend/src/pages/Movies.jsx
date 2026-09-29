import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/Card";
import Footer from "../components/Footer";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/movies"
        );

        const allMovies = response.data.movies || [];

        const movieList = allMovies.filter(
          (movie) => movie.category === "Movie"
        );

        setMovies(movieList);
      } catch (error) {
        console.error(
          "Failed to fetch movies:",
          error.response?.data || error.message
        );
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-6 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-6">
          Movies
        </h1>

        {movies.length === 0 ? (
          <p className="text-gray-400">
            No movies found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
              />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Movies;