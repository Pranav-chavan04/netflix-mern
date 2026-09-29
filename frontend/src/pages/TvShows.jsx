import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/Card";
import Footer from "../components/Footer";

const TvShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/movies"
        );

        const movies = response.data.movies || [];

        const tvShows = movies.filter(
          (movie) => movie.category === "TV Show"
        );

        setShows(tvShows);
      } catch (error) {
        console.error(
          "Failed to fetch TV shows:",
          error.response?.data || error.message
        );
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-6 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-6">
          TV Shows
        </h1>

        {shows.length === 0 ? (
          <p className="text-gray-400">
            No TV shows found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {shows.map((show) => (
              <MovieCard
                key={show._id}
                movie={show}
              />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default TvShows;