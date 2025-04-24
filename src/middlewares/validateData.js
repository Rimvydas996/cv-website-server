const Projects = require("../models/project");

const validateData = async (req, res, next) => {
  try {
    const { title, description, link } = req.body;
    const fieldsToValidate = { title, description, link };
    const id = req.params.id;

    for (const [fieldName, value] of Object.entries(fieldsToValidate)) {
      if (!id) {
        {
          if (!value) {
            return res.status(400).json({
              error: "Missing required fields",
              details: `${fieldName} is required`,
            });
          }
          const existinTitle = await Projects.findOne({ title: title });
          if (existinTitle) {
            return res.status(400).json({ error: "This title already exist" });
          }
        }
      }
      if (value && typeof value !== "string") {
        return res.status(422).json({
          error: "Invalid data type",
          details: `${fieldName} must be a string`,
        });
      }
    }
    next();
  } catch (error) {
    return res.status(500).json({
      error: "Validation error",
      details: error.message,
    });
  }
};

module.exports = validateData;
