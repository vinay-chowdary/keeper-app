const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const data = require('./data')
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("client/build"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started at ${port}`));










const dbURL = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster-vinay.dfnbs.mongodb.net/${process.env.DB_NAME}`;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", noteSchema);

const documents = data;

Note.insertMany(documents).then((err) => {
})


// note.save()



app.get("/api/notes", async (req, res) => {

    try {
        const notes = await Note.find({})
        res.send(JSON.stringify(notes))
    }

    catch (err) {
        console.log(err);
    }


})

