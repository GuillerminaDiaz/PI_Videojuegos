const {Videogame}= require('../db');

const deleteBdGame= async (idVideogame)=>{
    const videogame= await Videogame.findByPk(idVideogame);
    const videogameFound= await Videogame.findByPk(idVideogame);
    if(!videogame || !videogameFound) throw Error('Videogame not found');
    await videogame.destroy();
    return videogameFound;
};

module.exports={
    deleteBdGame
};