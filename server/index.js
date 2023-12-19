const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/public'));

app.get('/', (req, res) => {
  // get
});

app.post('/', (req, res) => {
  // post
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});