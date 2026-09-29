const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    genre: {
      type: [String],
      required: true
    },

    category: {
      type: String,
      enum: ["Movie", "TV Show"],
      required: true
    },

    releaseYear: {
      type: Number,
      required: true
    },

    duration: {
      type: Number,
      required: true
    },

    thumbnail: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10
    },

    language: {
      type: String,
      default: "English"
    },

    director: {
      type: String,
      required: true
    },

    cast: {
      type: [String],
      default: []
    },

    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Movies", movieSchema);