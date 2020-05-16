const express = require("express");
const path = require("path");
const htmlRoute = require("./routes/html-routes");
const apiRoute = require("./routes/api-routes");

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

apiRoute(app);
htmlRoute(app);

module.exports = app;