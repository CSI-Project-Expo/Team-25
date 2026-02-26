const mongoose = require("mongoose");

const missingPersonSchema = new mongoose.Schema(
  {
    
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

   
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    photoUrl: {
      type: String,
    },

    
    description: {
      type: String,
      required: true,
    },

    
    lastSeenLocation: {
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

    
    status: {
      type: String,
      enum: ["active", "found", "closed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MissingPerson", missingPersonSchema);
