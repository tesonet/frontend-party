const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();

// Allow cros origin domain
app.use(cors());

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);
