const express = require("express");
const verifyFirebaseToken = require("../middleware/verifyFirebaseToken");
const attachUser = require("../middleware/attachUser");

const router = express.Router();

router.get("/me", verifyFirebaseToken, attachUser, (req, res) => {
  res.json({
    firebaseUser: req.user,
    dbUser: req.dbUser,
  });
});

module.exports = router;
