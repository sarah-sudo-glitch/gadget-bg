const express = require("express");

const app = express();

const PORT = 5000;

//web serevr!
app.use(express.static("frontend"));
//
app.listen(PORT, () => {
    console.log(`Successfully running at http://localhost:${PORT}`);
});