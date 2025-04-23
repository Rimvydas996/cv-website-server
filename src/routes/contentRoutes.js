const express = require("express");

const router = express.Router();
const controllers = require("../controllers/contentControllers");
const validateProject = require("../middlewares/validateProject");

// Project routes
router.post("/projects", validateProject, controllers.createProject);

module.exports = router;
