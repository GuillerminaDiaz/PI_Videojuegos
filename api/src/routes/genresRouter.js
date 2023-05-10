const { getGenres } = require('../handlers/genresHandler');
const genresRouter = require('express').Router();

genresRouter.get('/', getGenres);

module.exports= genresRouter;