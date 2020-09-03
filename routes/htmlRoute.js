/*
GET /notes - Should return the notes.html file.
GET * - Should return the index.html file
*/

const path = require('path')
const router = require('express').Router();

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router