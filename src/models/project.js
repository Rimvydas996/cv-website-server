const mongoose = require("mongoose");

// Define a schema and model for MongoD
const ProjectsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    link: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// Export the model
const Projects = mongoose.model("Projects", ProjectsSchema);
// Export the schema
module.exports = Projects;
