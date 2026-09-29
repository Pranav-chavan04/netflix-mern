import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Herobanner from "../components/Herobanner";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/movies"
        );

        setMovies(response.data.movies);
      } catch (error) {
        console.error(
          "Failed to fetch movies:",
          error.response?.data || error.message
        );

        setError("Unable to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Filter movies by genre
  const actionMovies = movies.filter((movie) =>
    movie.genre?.some(
      (genre) => genre.toLowerCase() === "action"
    )
  );

  const comedyMovies = movies.filter((movie) =>
    movie.genre?.some(
      (genre) => genre.toLowerCase() === "comedy"
    )
  );

  const topRated = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Herobanner />

      <main className="py-8">

        {loading && (
          <div className="text-center py-10">
            Loading movies...
          </div>
        )}

        {error && (
          <div className="text-center text-red-500 py-10">
            {error}
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-10">
            No movies found.
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <>
            <MovieRow
              title="Trending Now"
              movies={movies}
            />

            <MovieRow
              title="Popular on Netflix"
              movies={[...movies].reverse()}
            />

            {actionMovies.length > 0 && (
              <MovieRow
                title="Action Movies"
                movies={actionMovies}
              />
            )}

            {comedyMovies.length > 0 && (
              <MovieRow
                title="Comedy Movies"
                movies={comedyMovies}
              />
            )}

            <MovieRow
              title="Continue Watching"
              movies={movies.slice(0, 6)}
            />

            <MovieRow
              title="Top Rated"
              movies={topRated}
            />
          </>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Home;