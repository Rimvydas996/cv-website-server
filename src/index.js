require("dotenv").config();
const express = require("express");
const connectDB = require("./services/database");
const cors = require("cors");
const contentRoutes = require("./routes/contentRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", contentRoutes);

connectDB();
// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something broke!" });
});

// MongoDB connection

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
