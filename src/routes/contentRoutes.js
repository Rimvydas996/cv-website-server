const express = require("express");

const router = express.Router();
const controllers = require("../controllers/contentControllers");
const validateData = require("../middlewares/validateData");

// Project routes
router.post("/", validateData, controllers.createProject);
router.get("/", controllers.getAllProjects);
router.get("/:id", controllers.getById);
router.put("/:id", validateData, controllers.updateOne);
router.delete("/:id", controllers.deleteOne);

module.exports = router;
