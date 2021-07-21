const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
const nasaRoutes = require("./routes/nasa.route");
app.use("/nasa", nasaRoutes);
process.env.NASA_API =
  process.env.NASA_API || "C7E5hRy1oQE2n6zIOL3J2HXRLv8agyV7NR0s8KE1";

app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(8400, function () {
  console.log("server started on port 8400");
  console.log(path.join(__dirname, "dist", "index.html"));
});
