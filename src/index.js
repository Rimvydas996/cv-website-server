require("dotenv").config();
const express = require("express");
const connectDB = require("./services/database");
const Project = require("./models/project");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio");
});

// POST route to save data to MongoDB
app.post("/api/projects", async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newEntry = new Project({ title, description, link });
    await newEntry.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("Failed to start server:", err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
