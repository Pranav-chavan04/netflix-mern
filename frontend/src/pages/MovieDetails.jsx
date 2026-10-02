import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToList, removeFromList, isInList } =
    useContext(AuthContext);

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
  `https://netflix-backend-597q.onrender.com/api/movies/${id}`
);

        setMovie(response.data);
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.message || "Failed to load movie"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <Navbar/>
        <h1 className="text-3xl font-bold mb-4">
          Movie not found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
        >
          Go Home
        </button>
      </div>
    );
  }

  const movieId = movie._id || movie.id;

  const title = movie.title || movie.name;

  const poster =
    movie.poster ||
    movie.poster_path ||
    movie.image;

  const background =
    movie.backdrop ||
    movie.backdrop_path ||
    movie.background ||
    poster;

  const description =
    movie.description ||
    movie.overview ||
    "No description available.";

  const inList = isInList(movieId);

  const handleMyList = () => {
    if (inList) {
      removeFromList(movieId);
    } else {
      addToList(movie);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      
      <div className="relative min-h-screen">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        />

        
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

    
        <div className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-24">

          <div className="max-w-6xl w-full">

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

              {/* Poster */}
              <div className="w-64 md:w-72 shrink-0">

               <img
  src={movie.thumbnail}
  alt={movie.title}
  className="w-full rounded-xl shadow-2xl"
/>

              </div>

             
              <div className="max-w-2xl">

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {title}
                </h1>

                
                <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">

                  {movie.releaseDate && (
                    <span>
                      {movie.releaseDate}
                    </span>
                  )}

                  {movie.release_year && (
                    <span>
                      {movie.release_year}
                    </span>
                  )}

                  {movie.rating && (
                    <span className="text-yellow-400">
                      ⭐ {movie.rating}
                    </span>
                  )}

                  {movie.vote_average && (
                    <span className="text-yellow-400">
                      ⭐ {movie.vote_average.toFixed
                        ? movie.vote_average.toFixed(1)
                        : movie.vote_average}
                    </span>
                  )}

                  {movie.runtime && (
                    <span>
                      {movie.runtime} min
                    </span>
                  )}

                </div>

               
                <p className="text-gray-200 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                
                {movie.genres && movie.genres.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">

                    {movie.genres.map((genre, index) => (
                      <span
                        key={genre.id || genre._id || index}
                        className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                      >
                        {genre.name || genre}
                      </span>
                    ))}

                  </div>
                )}

               
                <div className="flex flex-wrap gap-4">

                  <button
                    onClick={() => {
                    
                      console.log("Play:", movieId);
                    }}
                    className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-lg font-bold hover:bg-gray-200 transition"
                  >
                    ▶ Play
                  </button>

                  <button
                    onClick={handleMyList}
                    className={`flex items-center gap-2 px-7 py-3 rounded-lg font-bold transition ${
                      inList
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    {inList ? "✓ In My List" : "+ My List"}
                  </button>

                  <button
                    onClick={() => navigate(-1)}
                    className="px-7 py-3 rounded-lg bg-white/10 hover:bg-white/20 font-semibold transition"
                  >
                    ← Back
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
