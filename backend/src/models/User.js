const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true, 
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["family", "admin"],
      default: "family",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
