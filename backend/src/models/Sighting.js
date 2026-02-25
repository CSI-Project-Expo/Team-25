const mongoose = require("mongoose");

const sightingSchema = new mongoose.Schema(
  {
    missingPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MissingPerson",
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    photoUrl: {
      type: String,
    },

    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      placeName: {
        type: String,
      },
    },

    // ✅ AI Results
    aiMatchScore: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    aiReason: {
      type: String,
    },

    aiFinalScore: {
      type: Number,
      default: 0,
    },

    aiFaceScore: {
      type: Number,
      default: 0,
    },

    aiTextScore: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["pending", "relevant", "ignored"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sighting", sightingSchema);