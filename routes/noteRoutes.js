const router = require('express').Router()
const notes = require('../db/db.json');
const createNote = require('../serverFunctions');


router.get('/notes', (req, res) => {
    let noteSaver = notes;
    res.json(noteSaver);
})


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let newNote = createNote(req.body, notes);
    res.json(newNote);
})

module.exports = router;