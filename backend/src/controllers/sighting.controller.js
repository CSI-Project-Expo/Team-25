const Sighting = require("../models/Sighting");
const MissingPerson = require("../models/MissingPerson");
const { getAIMatchResult } = require("../utils/aiMatchService");

const createSighting = async (req, res) => {
  try {
    const {
      missingPersonId,
      description,
      photoUrl,
      location,
    } = req.body;

    if (
      !missingPersonId ||
      !description ||
      !location?.latitude ||
      !location?.longitude
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const missingPerson = await MissingPerson.findById(missingPersonId);
    if (!missingPerson || missingPerson.status !== "active") {
      return res.status(404).json({
        message: "Missing person case not found or not active",
      });
    }

   
    const aiResult = await getAIMatchResult(
  missingPerson,
  description,
  photoUrl
);

   const sighting = await Sighting.create({
  missingPerson: missingPersonId,
  description,
  photoUrl,
  location,
  aiMatchScore: aiResult.matchScore,      // High / Medium / Low
  aiReason: aiResult.reason,              // Explanation
  aiFinalScore: aiResult.finalScore,      // Combined numeric score
  aiFaceScore: aiResult.faceScore,        // Face similarity
  aiTextScore: aiResult.textScore,        // Text similarity
});

    res.status(201).json({
      message: "Sighting reported successfully",
      data: sighting,
    });
  } catch (error) {
    console.error("Create sighting error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createSighting,
};
