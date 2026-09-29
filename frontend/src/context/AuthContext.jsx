import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [myList, setMyList] = useState(() => {
    const savedList = localStorage.getItem("myList");
    return savedList ? JSON.parse(savedList) : [];
  });

  const getMovieId = (movie) => {
    return movie._id || movie.id;
  };

  const addToList = (movie) => {
    const movieId = getMovieId(movie);

    const alreadyExists = myList.some(
      (item) => getMovieId(item) === movieId
    );

    if (alreadyExists) {
      return;
    }

    const updatedList = [...myList, movie];

    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const removeFromList = (movieId) => {
    const updatedList = myList.filter(
      (movie) => getMovieId(movie) !== movieId
    );

    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const isInList = (movieId) => {
    return myList.some(
      (movie) => getMovieId(movie) === movieId
    );
  };

  return (
    <AuthContext.Provider
      value={{
        myList,
        addToList,
        removeFromList,
        isInList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;