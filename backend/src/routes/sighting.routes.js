const express = require("express");
const { createSighting } = require("../controllers/sighting.controller");

const router = express.Router();

router.post("/", createSighting);

module.exports = router;
