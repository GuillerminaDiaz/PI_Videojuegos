const { allVideogames } = require('../controllers/allVideogames');
const { getGameById } = require('../controllers/getGameById');
const { getGameByName } = require('../controllers/getGameByName');
const { postNewVideogame }= require('../controllers/postNewVideogame')

const getVideogames= async (req, res)=>{
    try {
        const { search }= req.query;
        if(search){
            const videogameName= await getGameByName(search);
            if(videogameName.length===0)throw Error('Videogame not found')
            return res.status(200).json(videogameName)
        }
        const games= await allVideogames();
        return res.status(200).json(games)
    } catch (error) {
        return res.status(400).json({ error: error.message})
    }
};

const getVideogameById= async (req, res)=>{
    try {
        const { idVideogame }= req.params;
        const videogame= await getGameById(idVideogame);
        if(!videogame) throw Error({ message: 'Videogame not found'});
        return res.status(200).json(videogame);
    } catch (error) {
        return res.status(500).json( { error: error.message});
    }
};

const postVideogame= async (req, res)=>{
    try {
        const { name, description, platforms, image, release_date, rating, genre} = req.body;
        if(!name || !description || !platforms || !image || !release_date || !rating) throw Error({ message: 'missing data'});
         const newGame= await postNewVideogame(name, description, platforms, image, release_date, rating, genre);
         
         return res.status(200).json(newGame);
    } catch (error) {
        return res.status(500).json( { error: error.message});
    }
};

module.exports= {
    getVideogames,
    getVideogameById,
    postVideogame
}