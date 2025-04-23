const validateProject = (req, res, next) => {
  const { title, description, link } = req.body;

  if (!title || !description || !link) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (typeof title !== "string" || typeof description !== "string" || typeof link !== "string") {
    return res.status(422).json({
      error: "Invalid data type",
      details: "All fields must be strings",
    });
  }

  next();
};

module.exports = validateProject;
