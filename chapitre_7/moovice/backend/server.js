const express = require('express');
const cors = require('cors');
// const dataMovies = require('./dataMovies');
// const {
//   getMovieAPI,
//   getPopularMovies,
//   getLatestMovies,
// } = require('../frontend/src/utils/Api');

const app = express();
app.use(cors());

app.get('/movie/:id', function (req, res) {
  // console.log('req.params.id:', req.params.id);
  const id = req.params.id;

  // res.json(dataMovies[0]);
});

app.get('/movie/popular', function (req, res) {
  // res.json(dataMovies[1]);
});

app.get('/movie/latest', function (req, res) {
  // res.json(dataMovies[2]);
});

const port = 8000;
app.listen(port, function () {
  console.log('What about 42 ??');
});
