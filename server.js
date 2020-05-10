const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
