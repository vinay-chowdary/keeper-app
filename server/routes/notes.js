//  route --> api/notes
const router = require('express').Router();

const { fetchNotes, deleteNotes, addNote, deleteNoteById } = require('../controllers/notes')



router.route('/')
    .get(fetchNotes)
    .delete(deleteNotes)


router.route('/add')
    .post(addNote)

router.route('/delete/:id')
    .delete(deleteNoteById)


module.exports = router;