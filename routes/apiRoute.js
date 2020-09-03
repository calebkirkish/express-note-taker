/*
GET /api/notes - Should read the db.json file and return all saved notes as JSON.
POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. 
This means you'll need to find a way to give each note a unique id when it's saved.
In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
*/
// const store = require('../db/utilities')
const notes = require('../db/db.json')
const router = require('express').Router();


    router.get('/notes', function (req, res) {
            res.json(notes)
//         store
//             .getNotes()
//             .then(notes => res.json(notes))
    })

    router.post('/notes', function (req, res) {
            res.json(notes)
//         store
//             .getNotes()
//             .then(notes => res.json(notes))
    })
    router.delete('/notes', function (req, res) {
            res.json(notes)
//         store
//             .getNotes()
//             .then(notes => res.json(notes))
    })

module.exports = router;