let notes = require('../db/db.json')
const router = require('express').Router();
const { v1: uuidv1 } = require('uuid');
const fs = require('fs');


router.get('/notes', function (req, res) {

  res.json(notes);
});

router.post('/notes', function (req, res) {
  let newNote = { title: req.body.title, text: req.body.text, id: uuidv1() };
  // console.log(newNote);
  notes.push(newNote);
  let data = JSON.stringify(notes);
  res.json(newNote);
});

router.delete('/notes/:id', function (req, res) {
  function checkId(note) {
    return note.id !== req.params.id;
  }
  notesTemp = notes.filter(checkId);
  notes = notesTemp
  fs.writeFileSync('db/db.json', JSON.stringify(notes))
  res.json(notes);

});

module.exports = router;

