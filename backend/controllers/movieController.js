const Movie = require("../models/movieSchema");

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

        res.status(201).json({
            message: "Movie created successfully",
            movie
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getMovies = async (req, res) => {
    try {
        const { search, genre } = req.query;

        let filter = {};

        if (search) {
            filter.title = {
                $regex: search,
                $options: "i"
            };
        }

        if (genre) {
            filter.genre = genre;
        }

        const movies = await Movie.find(filter);

        res.status(200).json({
            count: movies.length,
            movies
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json(movie);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie updated successfully",
            movie
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        }

        res.status(200).json({
            message: "Movie deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie
};