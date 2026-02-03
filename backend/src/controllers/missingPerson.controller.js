const MissingPerson = require("../models/MissingPerson");

const createMissingPerson = async (req, res) => {
  try {
    
    if (req.dbUser.role !== "family") {
      return res.status(403).json({
        message: "Only family users can create missing person cases",
      });
    }

    const {
      name,
      age,
      gender,
      photoUrl,
      description,
      lastSeenLocation,
    } = req.body;

    if (
      !name ||
      !age ||
      !description ||
      !lastSeenLocation?.latitude ||
      !lastSeenLocation?.longitude
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const missingPerson = await MissingPerson.create({
      createdBy: req.dbUser._id,
      name,
      age,
      gender,
      photoUrl,
      description,
      lastSeenLocation,
      status: "active",
    });

    res.status(201).json({
      message: "Missing person case created successfully",
      data: missingPerson,
    });
  } catch (error) {
    console.error("Create missing person error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createMissingPerson,
};
