const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/html-routes");
const apiRoute = require("./routes/api-routes");

app = express();

app.use(express.static("public"));

htmlRoute(app);
apiRoute(app);

module.exports = app;