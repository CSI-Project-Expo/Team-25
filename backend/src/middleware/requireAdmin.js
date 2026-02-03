const requireAdmin = (req, res, next) => {
  if (req.dbUser.role !== "admin") {
    return res.status(403).json({
      message: "Admin access only.",
    });
  }
  next();
};

module.exports = requireAdmin;
