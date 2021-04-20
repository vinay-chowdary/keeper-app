const Note = require('../models/note.model');
const fetchNotes = async (req, res) => {
    try {
        const notes = await Note.find({})
        res.json(notes)
    }

    catch (err) {
        console.log(err);
    }
}

const deleteNotes = async (req, res) => {
    try {
        const deletedAll = await Note.deleteMany()
        res.send(deletedAll)
    }
    catch (err) {
        console.log(err);
    }
}

const addNote = async (req, res) => {
    try {
        const insertedData = await Note.insertMany(req.body)
        res.json(insertedData)
    }

    catch (err) {
        console.log(err);
    }
}

const deleteNoteById = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        res.json(deletedNote)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    fetchNotes,
    deleteNotes,
    addNote,
    deleteNoteById
}