import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const MyList = () => {
  const { myList, removeFromList } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12">

      <h1 className="text-4xl font-bold mb-8">
        My List
      </h1>

      {myList.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <h2 className="text-2xl font-semibold mb-3">
            Your list is empty
          </h2>

          <p className="text-gray-400 mb-6">
            Add movies to your list and they will appear here.
          </p>

          <Link
            to="/movies"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">

          {myList.map((movie) => (
            <div
              key={movie._id}
              className="group relative"
            >

              <Link to={`/movie/${movie._id}`}>

                <div className="aspect-2/3 overflow-hidden rounded-lg bg-zinc-900">

                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                </div>

                <h3 className="mt-3 font-semibold truncate">
                  {movie.title}
                </h3>

              </Link>

              <button
                onClick={() => removeFromList(movie._id)}
                className="absolute top-2 right-2 w-9 h-9 rounded-full bg-black/80 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default MyList;