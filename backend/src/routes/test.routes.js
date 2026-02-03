const express = require("express");
const verifyFirebaseToken = require("../middleware/verifyFirebaseToken");

const router = express.Router();

router.get("/protected", verifyFirebaseToken, (req, res) => {
  res.status(200).json({
    message: "Protected route accessed successfully ",
    user: req.user,
  });
});

module.exports = router;
