const express = require("express");
const verifyFirebaseToken = require("../middleware/verifyFirebaseToken");
const attachUser = require("../middleware/attachUser");
const requireAdmin = require("../middleware/requireAdmin");

const {
  getActiveMissingPersons,
  getSightingsForCase,
  updateSightingStatus,
  updateMissingPersonStatus,
} = require("../controllers/admin.controller");

const router = express.Router();

router.use(verifyFirebaseToken, attachUser, requireAdmin);

router.get("/missing-persons", getActiveMissingPersons);
router.get("/missing-persons/:id/sightings", getSightingsForCase);
router.patch("/sightings/:id", updateSightingStatus);
router.patch("/missing-persons/:id", updateMissingPersonStatus);

module.exports = router;
