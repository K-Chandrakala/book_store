const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); 
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const bookRoutes = require("../routes/bookRoutes");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Routes
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
});
