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

    
    aiMatchScore: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },

    aiReason: {
      type: String,
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
