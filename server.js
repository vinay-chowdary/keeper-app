const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client/build"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at ${port}`));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
})