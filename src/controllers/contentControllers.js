const Project = require("../models/project");
const mongoose = require("mongoose");

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

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Project.findById(id);
    res.status(200).json(data);
  } catch (error) {}
};

const updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, link } = req.body;
    const fieldsToValidate = { title, description, link };
    for (const [fieldName, value] of Object.entries(fieldsToValidate)) {
      if (value) {
        await Project.findByIdAndUpdate(id, { [fieldName]: value });
      }
    }

    const updatedData = await Project.findById(id);
    console.log("Updated Data:", updatedData);

    res.status(200).json(updatedData, "atnaujinta sekmingai");
  } catch (error) {}
};

const deleteOne = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({
      message: "Project deleted successfully",
      deletedProject,
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ error: error.message });
  }
};

const controllers = {
  createProject,
  getAllProjects,
  getById,
  updateOne,
  deleteOne,
};

module.exports = controllers;
