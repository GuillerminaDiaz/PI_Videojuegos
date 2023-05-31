const { allVideogames } = require('../controllers/allVideogames');
const { getGameById } = require('../controllers/getGameById');
const { getGameByName } = require('../controllers/getGameByName');
const { postNewVideogame }= require('../controllers/postNewVideogame');
const {deleteBdGame}= require('../controllers/deleteBdGame');
const {updatedVideogame}= require('../controllers/updatedVideogame')
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

const deleteVideogame= async (req, res)=>{
    try {
        const {idVideogame}= req.params;
        const deleted= await deleteBdGame(idVideogame);
        return res.status(200).json(deleted);
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
};

const updateVideogame= async (req, res)=>{
    try {
        const {idVideogame}= req.params;
        const {description, platforms, image, rating}= req.body;
        console.log(idVideogame, description, platforms, image, rating);
        if(!idVideogame) throw Error('Id is necessary');
        
        const videogameChanged= await updatedVideogame(idVideogame, description, platforms, image, rating);
        return res.status(200).json(videogameChanged);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

module.exports= {
    getVideogames,
    getVideogameById,
    postVideogame,
    deleteVideogame,
    updateVideogame
}