const express = require("express");
const verifyFirebaseToken = require("../middleware/verifyFirebaseToken");
const attachUser = require("../middleware/attachUser");
const {
  createMissingPerson,
} = require("../controllers/missingPerson.controller");

const router = express.Router();

router.post(
  "/",
  verifyFirebaseToken,
  attachUser,
  createMissingPerson
);

module.exports = router;
