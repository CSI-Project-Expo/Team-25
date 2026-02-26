const MissingPerson = require("../models/MissingPerson");
const Sighting = require("../models/Sighting");


const getActiveMissingPersons = async (req, res) => {
  try {
    const cases = await MissingPerson.find({ status: "active" })
      .populate("createdBy", "email");

    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


const getSightingsForCase = async (req, res) => {
  try {
    const sightings = await Sighting.find({
      missingPerson: req.params.id,
    }).sort({ createdAt: -1 });

    res.json(sightings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


const updateSightingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["relevant", "ignored"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const sighting = await Sighting.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(sighting);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


const updateMissingPersonStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["found", "closed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updated = await MissingPerson.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getActiveMissingPersons,
  getSightingsForCase,
  updateSightingStatus,
  updateMissingPersonStatus,
};
