const videogamesRouter = require('express').Router(); 
const { getVideogames, getVideogameById, postVideogame, deleteVideogame, updateVideogame } = require('../handlers/videogamesHandlers');


videogamesRouter.get('/', getVideogames);
videogamesRouter.get('/:idVideogame', getVideogameById);
videogamesRouter.post('/', postVideogame);
videogamesRouter.delete('/:idVideogame', deleteVideogame);
videogamesRouter.put('/:idVideogame', updateVideogame)

module.exports= videogamesRouter;