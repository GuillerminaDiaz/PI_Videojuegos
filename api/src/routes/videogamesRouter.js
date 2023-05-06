const videogamesRouter = require('express').Router(); 
const { allVideogames } = require('../controllers/allVideogames');
const { getGameByName } = require('../controllers/getGameByName');


videogamesRouter.get('/', (req, res)=>{
    try {
        const { nameGame }= req.query;
        const allGames= allVideogames();
        const game = getGameByName(nameGame);

        if(!idVidedogame) res.status(200).json(allGames);

        return res.status(200).json(game);
    } catch (error) {
        return res.status(500).json( { error: error.message});
    };
});//todos y por nombre
videogamesRouter.get('/:idVideogame')
videogamesRouter.post('/')


module.exports= videogamesRouter;