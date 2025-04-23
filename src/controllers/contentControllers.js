const Project = require("../models/project");

const createProject = async (req, res) => {
  try {
    const { title, description, link } = req.body;
    const newProject = new Project({ title, description, link });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(400).json({ error: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: error.message });
  }
};

// Change the export style to be more explicit
const controllers = {
  createProject,
  getAllProjects,
};

module.exports = controllers;
