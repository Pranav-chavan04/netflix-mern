const dotenv = require("dotenv");

dotenv.config();

const connectdb = require("./config/db");

const app = require("./src/index");

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");

connectdb();

app.use("/api/auth", authRoutes);

app.use("/api/movies", movieRoutes);


app.listen(5000, () => {
    console.log("server is connected to port 5000");
});