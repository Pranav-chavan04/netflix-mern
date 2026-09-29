import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import MyList from "./pages/MyList";
import MovieDetails from "./pages/MovieDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/tv-shows" element={<TvShows />} />

        <Route path="/my-list" element={<MyList />} />

        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;