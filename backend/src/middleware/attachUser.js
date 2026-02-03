const User = require("../models/User");

const attachUser = async (req, res, next) => {
  try {
    const { uid, email } = req.user;

    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({
        uid,
        email,
        role: "family",
      });
    }

    req.dbUser = user;
    next();
  } catch (error) {
    console.error("Attach user error:", error.message);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = attachUser;
