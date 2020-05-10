const express = require("express");
const path = require("path");

app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = app;