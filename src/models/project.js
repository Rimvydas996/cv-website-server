const mongoose = require("mongoose");

// Define a schema and model for MongoD
const ProjectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    link: {
      type: String,
      required: [true, "Link is required"],
      trim: true,
      // validate: {
      //   validator: function (v) {
      //     return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
      //   },
      //   message: (props) => `${props.value} is not a valid URL!`,
      // },
    },
    photo: { type: String, required: false },
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
