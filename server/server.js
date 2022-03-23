const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/api/notes', (req, res) => {
  const query = 'SELECT * FROM notes';
  db.query(query, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  })
});