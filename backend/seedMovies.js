const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Movie = require("./models/movieSchema");

dotenv.config();

const movies = [
  // =========================
  // MOVIES
  // =========================

  {
    title: "Inception",
    description: "A skilled thief enters people's dreams to steal valuable secrets.",
    genre: ["Sci-Fi", "Action"],
    category: "Movie",
    releaseYear: 2010,
    duration: 148,
    thumbnail: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    rating: 8.8,
    language: "English",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    isFeatured: true
  },

  {
    title: "Interstellar",
    description: "Explorers travel through a wormhole searching for a new home for humanity.",
    genre: ["Sci-Fi", "Drama"],
    category: "Movie",
    releaseYear: 2014,
    duration: 169,
    thumbnail: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.7,
    language: "English",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway"],
    isFeatured: true
  },

  {
    title: "The Dark Knight",
    description: "Batman faces a criminal mastermind who plunges Gotham into chaos.",
    genre: ["Action", "Drama"],
    category: "Movie",
    releaseYear: 2008,
    duration: 152,
    thumbnail: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    language: "English",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger"],
    isFeatured: true
  },

  {
    title: "Avengers: Endgame",
    description: "The Avengers attempt to undo the devastating events caused by Thanos.",
    genre: ["Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2019,
    duration: 181,
    thumbnail: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    rating: 8.4,
    language: "English",
    director: "Anthony Russo",
    cast: ["Robert Downey Jr.", "Chris Evans"],
    isFeatured: true
  },

  {
    title: "The Matrix",
    description: "A hacker discovers that reality is actually a sophisticated simulation.",
    genre: ["Sci-Fi", "Action"],
    category: "Movie",
    releaseYear: 1999,
    duration: 136,
    thumbnail: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    language: "English",
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    isFeatured: true
  },

  {
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    genre: ["Drama", "Crime"],
    category: "Movie",
    releaseYear: 1972,
    duration: 175,
    thumbnail: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 9.2,
    language: "English",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino"],
    isFeatured: true
  },

  {
    title: "Forrest Gump",
    description: "A kind-hearted man experiences extraordinary events throughout his life.",
    genre: ["Drama", "Comedy"],
    category: "Movie",
    releaseYear: 1994,
    duration: 142,
    thumbnail: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    rating: 8.8,
    language: "English",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright"],
    isFeatured: true
  },

  {
    title: "Gladiator",
    description: "A betrayed Roman general fights his way back to freedom and revenge.",
    genre: ["Action", "Drama"],
    category: "Movie",
    releaseYear: 2000,
    duration: 155,
    thumbnail: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    rating: 8.5,
    language: "English",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix"],
    isFeatured: false
  },

  {
    title: "John Wick",
    description: "A legendary assassin returns to the criminal underworld seeking revenge.",
    genre: ["Action", "Thriller"],
    category: "Movie",
    releaseYear: 2014,
    duration: 101,
    thumbnail: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    rating: 7.4,
    language: "English",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Michael Nyqvist"],
    isFeatured: false
  },

  {
    title: "Mad Max: Fury Road",
    description: "Two rebels flee across a dangerous wasteland while pursued by a tyrant.",
    genre: ["Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2015,
    duration: 120,
    thumbnail: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    rating: 8.1,
    language: "English",
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron"],
    isFeatured: false
  },

  {
    title: "Spider-Man: No Way Home",
    description: "Peter Parker's identity is exposed, bringing villains from other realities.",
    genre: ["Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2021,
    duration: 148,
    thumbnail: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.2,
    language: "English",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya"],
    isFeatured: false
  },

  {
    title: "Dune",
    description: "A young nobleman travels to a dangerous desert planet that holds humanity's greatest resource.",
    genre: ["Sci-Fi", "Drama"],
    category: "Movie",
    releaseYear: 2021,
    duration: 155,
    thumbnail: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    rating: 8.0,
    language: "English",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya"],
    isFeatured: true
  },

  {
    title: "Guardians of the Galaxy",
    description: "A group of unlikely heroes must unite to protect the galaxy.",
    genre: ["Action", "Comedy", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2014,
    duration: 121,
    thumbnail: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    rating: 8.0,
    language: "English",
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana"],
    isFeatured: false
  },

  {
    title: "Deadpool",
    description: "A wisecracking mercenary seeks revenge after a dangerous experiment.",
    genre: ["Action", "Comedy"],
    category: "Movie",
    releaseYear: 2016,
    duration: 108,
    thumbnail: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    rating: 8.0,
    language: "English",
    director: "Tim Miller",
    cast: ["Ryan Reynolds", "Morena Baccarin"],
    isFeatured: false
  },

  {
    title: "Free Guy",
    description: "A bank teller discovers he is actually a character inside a video game.",
    genre: ["Comedy", "Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2021,
    duration: 115,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQiwHa_Rv7INhrgHohX4CVCbracsAXl5jUC3IluLnlw&s=10",
    rating: 7.1,
    language: "English",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Jodie Comer"],
    isFeatured: false
  },

  {
    title: "The Hangover",
    description: "Three friends wake up after a wild night in Las Vegas with no memory of what happened.",
    genre: ["Comedy"],
    category: "Movie",
    releaseYear: 2009,
    duration: 100,
    thumbnail: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    rating: 7.7,
    language: "English",
    director: "Todd Phillips",
    cast: ["Bradley Cooper", "Zach Galifianakis"],
    isFeatured: false
  },

  {
    title: "Superbad",
    description: "Two high school friends attempt to make their final days of school unforgettable.",
    genre: ["Comedy"],
    category: "Movie",
    releaseYear: 2007,
    duration: 113,
    thumbnail: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerR0dJ.jpg",
    rating: 7.6,
    language: "English",
    director: "Greg Mottola",
    cast: ["Jonah Hill", "Michael Cera"],
    isFeatured: false
  },

  {
    title: "The Wolf of Wall Street",
    description: "A stockbroker builds a massive fortune through greed and corruption.",
    genre: ["Comedy", "Drama"],
    category: "Movie",
    releaseYear: 2013,
    duration: 180,
    thumbnail: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    rating: 8.2,
    language: "English",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Jonah Hill"],
    isFeatured: false
  },

  {
    title: "The Truman Show",
    description: "A man slowly discovers that his entire life is being broadcast to the world.",
    genre: ["Comedy", "Drama", "Sci-Fi"],
    category: "Movie",
    releaseYear: 1998,
    duration: 103,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgWTDiZW3eEVzOUjvWbER-bAXSLXKP3AZvNJusKsgYQ&s=10",
    rating: 8.2,
    language: "English",
    director: "Peter Weir",
    cast: ["Jim Carrey", "Laura Linney"],
    isFeatured: false
  },

  {
    title: "Joker",
    description: "A troubled man descends into a life of crime and becomes a symbol of chaos.",
    genre: ["Drama", "Thriller"],
    category: "Movie",
    releaseYear: 2019,
    duration: 122,
    thumbnail: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: 8.4,
    language: "English",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro"],
    isFeatured: true
  },

  {
    title: "Whiplash",
    description: "An ambitious drummer is pushed to his limits by an intense music instructor.",
    genre: ["Drama"],
    category: "Movie",
    releaseYear: 2014,
    duration: 107,
    thumbnail: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    rating: 8.5,
    language: "English",
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons"],
    isFeatured: false
  },

  {
    title: "Parasite",
    description: "A struggling family becomes entangled with a wealthy household.",
    genre: ["Drama", "Thriller"],
    category: "Movie",
    releaseYear: 2019,
    duration: 132,
    thumbnail: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: 8.5,
    language: "Korean",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Choi Woo-shik"],
    isFeatured: true
  },

  {
    title: "The Shawshank Redemption",
    description: "Two imprisoned men form a life-changing friendship over many years.",
    genre: ["Drama"],
    category: "Movie",
    releaseYear: 1994,
    duration: 142,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDwa1Jh6WGSdvovtYq4kyXQRy8yyKi87eX79b31rz43Q&s=10",
    rating: 9.3,
    language: "English",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman"],
    isFeatured: true
  },

  {
    title: "Fight Club",
    description: "An insomniac and a mysterious soap maker create an underground fight club.",
    genre: ["Drama", "Thriller"],
    category: "Movie",
    releaseYear: 1999,
    duration: 139,
    thumbnail: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    rating: 8.8,
    language: "English",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton"],
    isFeatured: false
  },

  {
    title: "The Prestige",
    description: "Two rival magicians become obsessed with defeating one another.",
    genre: ["Drama", "Sci-Fi", "Thriller"],
    category: "Movie",
    releaseYear: 2006,
    duration: 130,
    thumbnail: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFh7kG4Wm2lXk.jpg",
    rating: 8.5,
    language: "English",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman"],
    isFeatured: false
  },

  {
    title: "Oppenheimer",
    description: "The story of the scientist who led the development of the atomic bomb.",
    genre: ["Drama", "History"],
    category: "Movie",
    releaseYear: 2023,
    duration: 180,
    thumbnail: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    rating: 8.6,
    language: "English",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt"],
    isFeatured: true
  },

  {
    title: "Top Gun: Maverick",
    description: "A veteran pilot trains a new generation of elite aviators.",
    genre: ["Action", "Drama"],
    category: "Movie",
    releaseYear: 2022,
    duration: 130,
    thumbnail: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    rating: 8.3,
    language: "English",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller"],
    isFeatured: true
  },

  {
    title: "Extraction",
    description: "A black-ops mercenary embarks on a dangerous rescue mission.",
    genre: ["Action", "Thriller"],
    category: "Movie",
    releaseYear: 2020,
    duration: 116,
    thumbnail: "https://image.tmdb.org/t/p/w500/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    rating: 6.8,
    language: "English",
    director: "Sam Hargrave",
    cast: ["Chris Hemsworth", "Rudhraksh Jaiswal"],
    isFeatured: false
  },

  {
    title: "Avatar",
    description: "A marine becomes part of an alien world and fights to protect its people.",
    genre: ["Sci-Fi", "Action"],
    category: "Movie",
    releaseYear: 2009,
    duration: 162,
    thumbnail: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    rating: 7.9,
    language: "English",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana"],
    isFeatured: false
  },

  {
    title: "Arrival",
    description: "A linguist works to communicate with mysterious extraterrestrial visitors.",
    genre: ["Sci-Fi", "Drama"],
    category: "Movie",
    releaseYear: 2016,
    duration: 116,
    thumbnail: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    rating: 7.9,
    language: "English",
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner"],
    isFeatured: false
  },

  {
    title: "Everything Everywhere All at Once",
    description: "A woman discovers countless versions of herself across the multiverse.",
    genre: ["Comedy", "Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2022,
    duration: 139,
    thumbnail: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    rating: 7.8,
    language: "English",
    director: "Daniel Kwan",
    cast: ["Michelle Yeoh", "Ke Huy Quan"],
    isFeatured: false
  },

  {
    title: "Knives Out",
    description: "A detective investigates the mysterious death of a wealthy novelist.",
    genre: ["Comedy", "Drama", "Mystery"],
    category: "Movie",
    releaseYear: 2019,
    duration: 131,
    thumbnail: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    rating: 7.8,
    language: "English",
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans"],
    isFeatured: false
  },

  {
    title: "The Social Network",
    description: "The creation of a revolutionary social networking platform changes its founders' lives.",
    genre: ["Drama"],
    category: "Movie",
    releaseYear: 2010,
    duration: 120,
    thumbnail: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    rating: 7.8,
    language: "English",
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield"],
    isFeatured: false
  },

  {
    title: "La La Land",
    description: "A musician and an aspiring actress fall in love while chasing their dreams.",
    genre: ["Comedy", "Drama"],
    category: "Movie",
    releaseYear: 2016,
    duration: 128,
    thumbnail: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    rating: 8.0,
    language: "English",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone"],
    isFeatured: false
  },

  {
    title: "The Grand Budapest Hotel",
    description: "A concierge and his lobby boy become involved in a complicated adventure.",
    genre: ["Comedy", "Drama"],
    category: "Movie",
    releaseYear: 2014,
    duration: 100,
    thumbnail: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    rating: 8.1,
    language: "English",
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "Tony Revolori"],
    isFeatured: false
  },

  {
    title: "The Martian",
    description: "An astronaut becomes stranded on Mars and must find a way to survive.",
    genre: ["Sci-Fi", "Drama"],
    category: "Movie",
    releaseYear: 2015,
    duration: 144,
    thumbnail: "https://image.tmdb.org/t/p/w500/5BHuvQ4Yrxk6w3hJf2x5n1w8n.jpg",
    rating: 8.0,
    language: "English",
    director: "Ridley Scott",
    cast: ["Matt Damon", "Jessica Chastain"],
    isFeatured: false
  },

  {
    title: "Edge of Tomorrow",
    description: "A soldier trapped in a time loop repeatedly fights an alien invasion.",
    genre: ["Action", "Sci-Fi"],
    category: "Movie",
    releaseYear: 2014,
    duration: 113,
    thumbnail: "https://image.tmdb.org/t/p/w500/xjw5trHV7Mwo61P0kCTy8n4fW1G.jpg",
    rating: 7.9,
    language: "English",
    director: "Doug Liman",
    cast: ["Tom Cruise", "Emily Blunt"],
    isFeatured: false
  },

  {
    title: "Prisoners",
    description: "A desperate father takes matters into his own hands after his daughter disappears.",
    genre: ["Drama", "Thriller"],
    category: "Movie",
    releaseYear: 2013,
    duration: 153,
    thumbnail: "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXhQ3Xw4p5r.jpg",
    rating: 8.1,
    language: "English",
    director: "Denis Villeneuve",
    cast: ["Hugh Jackman", "Jake Gyllenhaal"],
    isFeatured: false
  },

  {
    title: "The Revenant",
    description: "A frontiersman seeks survival and revenge after being left for dead.",
    genre: ["Drama", "Action"],
    category: "Movie",
    releaseYear: 2015,
    duration: 156,
    thumbnail: "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    rating: 8.0,
    language: "English",
    director: "Alejandro G. Iñárritu",
    cast: ["Leonardo DiCaprio", "Tom Hardy"],
    isFeatured: false
  },

  {
    title: "Catch Me If You Can",
    description: "A young con artist successfully impersonates professionals while an FBI agent pursues him.",
    genre: ["Comedy", "Drama"],
    category: "Movie",
    releaseYear: 2002,
    duration: 141,
    thumbnail: "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    rating: 8.1,
    language: "English",
    director: "Steven Spielberg",
    cast: ["Leonardo DiCaprio", "Tom Hanks"],
    isFeatured: false
  },

  // =========================
  // TV SHOWS
  // =========================

  {
    title: "Breaking Bad",
    description: "A chemistry teacher enters the drug trade after receiving a devastating diagnosis.",
    genre: ["Drama", "Crime"],
    category: "TV Show",
    releaseYear: 2008,
    duration: 47,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxJ_oPwiNmhIE40AK7lP21gi8PiYP_qbBrcwqPiGkfw&s=10",
    rating: 9.5,
    language: "English",
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul"],
    isFeatured: true
  },

  {
    title: "Stranger Things",
    description: "A group of friends uncover supernatural mysteries in their small town.",
    genre: ["Sci-Fi", "Drama"],
    category: "TV Show",
    releaseYear: 2016,
    duration: 51,
    thumbnail: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    rating: 8.6,
    language: "English",
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard"],
    isFeatured: true
  },

  {
    title: "The Last of Us",
    description: "A hardened survivor escorts a young girl across a post-apocalyptic America.",
    genre: ["Drama", "Action"],
    category: "TV Show",
    releaseYear: 2023,
    duration: 50,
    thumbnail: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    rating: 8.8,
    language: "English",
    director: "Craig Mazin",
    cast: ["Pedro Pascal", "Bella Ramsey"],
    isFeatured: true
  },

  {
    title: "Wednesday",
    description: "Wednesday Addams investigates strange events at her unusual new school.",
    genre: ["Comedy", "Mystery"],
    category: "TV Show",
    releaseYear: 2022,
    duration: 50,
    thumbnail: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    rating: 8.0,
    language: "English",
    director: "Alfred Gough",
    cast: ["Jenna Ortega", "Emma Myers"],
    isFeatured: false
  },

  {
    title: "The Boys",
    description: "A group of vigilantes takes on corrupt superheroes who abuse their powers.",
    genre: ["Action", "Comedy"],
    category: "TV Show",
    releaseYear: 2019,
    duration: 60,
    thumbnail: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    rating: 8.7,
    language: "English",
    director: "Eric Kripke",
    cast: ["Karl Urban", "Jack Quaid"],
    isFeatured: false
  },

  {
    title: "Dark",
    description: "A missing child leads four families into a mystery spanning generations.",
    genre: ["Sci-Fi", "Drama"],
    category: "TV Show",
    releaseYear: 2017,
    duration: 55,
    thumbnail: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    rating: 8.7,
    language: "German",
    director: "Baran bo Odar",
    cast: ["Louis Hofmann", "Lisa Vicari"],
    isFeatured: false
  },

  {
    title: "Money Heist",
    description: "A criminal mastermind recruits a team for an ambitious series of heists.",
    genre: ["Action", "Drama"],
    category: "TV Show",
    releaseYear: 2017,
    duration: 50,
    thumbnail: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    rating: 8.2,
    language: "Spanish",
    director: "Álex Pina",
    cast: ["Úrsula Corberó", "Álvaro Morte"],
    isFeatured: false
  },

  {
    title: "Peaky Blinders",
    description: "A powerful criminal family expands its influence in post-war Birmingham.",
    genre: ["Drama", "Crime"],
    category: "TV Show",
    releaseYear: 2013,
    duration: 60,
    thumbnail: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    rating: 8.8,
    language: "English",
    director: "Steven Knight",
    cast: ["Cillian Murphy", "Paul Anderson"],
    isFeatured: true
  },

  {
    title: "The Witcher",
    description: "A monster hunter struggles to find his place in a dangerous magical world.",
    genre: ["Action", "Fantasy"],
    category: "TV Show",
    releaseYear: 2019,
    duration: 60,
    thumbnail: "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
    rating: 8.0,
    language: "English",
    director: "Lauren Schmidt Hissrich",
    cast: ["Henry Cavill", "Anya Chalotra"],
    isFeatured: false
  },

  {
    title: "The Mandalorian",
    description: "A lone bounty hunter travels through the galaxy protecting a mysterious child.",
    genre: ["Action", "Sci-Fi"],
    category: "TV Show",
    releaseYear: 2019,
    duration: 40,
    thumbnail: "https://image.tmdb.org/t/p/w500/eU1i6eHXlz4Ug8Fh2tZ3Kq1m9p.jpg",
    rating: 8.5,
    language: "English",
    director: "Jon Favreau",
    cast: ["Pedro Pascal", "Giancarlo Esposito"],
    isFeatured: true
  },

  {
    title: "The Office",
    description: "The everyday lives of employees working at a paper company are documented.",
    genre: ["Comedy"],
    category: "TV Show",
    releaseYear: 2005,
    duration: 22,
    thumbnail: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
    rating: 8.9,
    language: "English",
    director: "Greg Daniels",
    cast: ["Steve Carell", "Rainn Wilson"],
    isFeatured: false
  },

  {
    title: "Friends",
    description: "Six friends navigate relationships, careers and life together in New York.",
    genre: ["Comedy"],
    category: "TV Show",
    releaseYear: 1994,
    duration: 22,
    thumbnail: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    rating: 8.9,
    language: "English",
    director: "David Crane",
    cast: ["Jennifer Aniston", "Courteney Cox"],
    isFeatured: false
  },

  {
    title: "Brooklyn Nine-Nine",
    description: "A talented detective and his eccentric colleagues work in a New York precinct.",
    genre: ["Comedy", "Crime"],
    category: "TV Show",
    releaseYear: 2013,
    duration: 22,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pYF_Pd0Wfh2ng51fOemfwanw-7ZCKyLWEOW93kzHNw&s=10",
    rating: 8.4,
    language: "English",
    director: "Dan Goor",
    cast: ["Andy Samberg", "Andre Braugher"],
    isFeatured: false
  },

  {
    title: "Black Mirror",
    description: "A collection of stories exploring technology and its effects on society.",
    genre: ["Sci-Fi", "Drama"],
    category: "TV Show",
    releaseYear: 2011,
    duration: 60,
    thumbnail: "https://image.tmdb.org/t/p/w500/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",
    rating: 8.7,
    language: "English",
    director: "Charlie Brooker",
    cast: ["Daniel Lapaine", "Hannah John-Kamen"],
    isFeatured: false
  },

  {
    title: "Arcane",
    description: "Two sisters find themselves on opposing sides of a conflict between cities.",
    genre: ["Action", "Sci-Fi", "Drama"],
    category: "TV Show",
    releaseYear: 2021,
    duration: 40,
    thumbnail: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    rating: 9.0,
    language: "English",
    director: "Christian Linke",
    cast: ["Hailee Steinfeld", "Ella Purnell"],
    isFeatured: true
  },

  {
    title: "House of the Dragon",
    description: "A royal family struggles for control of the Iron Throne.",
    genre: ["Drama", "Action", "Fantasy"],
    category: "TV Show",
    releaseYear: 2022,
    duration: 60,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVAa5kE8U6uXLrQnlxj3mjEQ5utxlnkdhBsNRR79sbw&s=10",
    rating: 8.4,
    language: "English",
    director: "Ryan Condal",
    cast: ["Matt Smith", "Emma D'Arcy"],
    isFeatured: true
  },

  {
    title: "Succession",
    description: "A wealthy family fights for control of a powerful media empire.",
    genre: ["Drama", "Comedy"],
    category: "TV Show",
    releaseYear: 2018,
    duration: 60,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnbkrKBEJQGyNwpzto8ju7maYPQze_DJa7ktZZcsFSw&s=10",
    rating: 8.9,
    language: "English",
    director: "Jesse Armstrong",
    cast: ["Brian Cox", "Jeremy Strong"],
    isFeatured: false
  },

  {
    title: "Loki",
    description: "The God of Mischief becomes involved with a mysterious organization outside time.",
    genre: ["Action", "Sci-Fi", "Comedy"],
    category: "TV Show",
    releaseYear: 2021,
    duration: 50,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6oU0fgn6EWpv9fBf3D_G7BIb7gGylKFG-Cns0JIHgQ&s=10",
    rating: 8.2,
    language: "English",
    director: "Michael Waldron",
    cast: ["Tom Hiddleston", "Owen Wilson"],
    isFeatured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Movie.deleteMany({});

    console.log("Old movies deleted");

    await Movie.insertMany(movies);

    console.log(`${movies.length} movies inserted successfully`);

    await mongoose.connection.close();

    console.log("Database connection closed");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seedDatabase();