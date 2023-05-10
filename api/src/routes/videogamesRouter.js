const videogamesRouter = require('express').Router(); 
const { getVideogames, getVideogameById, postVideogame } = require('../handlers/videogamesHandlers');


videogamesRouter.get('/', getVideogames);
videogamesRouter.get('/:idVideogame', getVideogameById);
videogamesRouter.post('/', postVideogame);


module.exports= videogamesRouter;