const express = require("express");

const app = express();

const PORT = 3002;

//web serevr!
app.use(express.static("frontend"));
//
app.listen(PORT, () => {
    console.log(`Successfully running at http://localhost:${PORT}`);
});