const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My Portfolio");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Failed to start server:", err);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${port}`);
});
