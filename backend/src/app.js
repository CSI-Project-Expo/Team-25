require("./config/firebase");
const testRoutes = require("./routes/test.routes");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const missingPersonRoutes = require("./routes/missingPerson.routes");
const app = express();
const sightingRoutes = require("./routes/sighting.routes");
const adminRoutes = require("./routes/admin.routes");

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/missing-persons", missingPersonRoutes);
app.use("/api/test", testRoutes);
app.use("/api/sightings", sightingRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "MissingLink API is running. "
  });
});

module.exports = app;
