const dotenv = require("dotenv");

dotenv.config();

const connectdb = require("./config/db");

const app = require("./src/index");

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");

connectdb();

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is connected to port ${PORT}`);
});