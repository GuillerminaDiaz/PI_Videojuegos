const { Videogame }= require('../db');
//ver tema modularizar bien
//me parece que esto viene de la api lko unico que guardo en db es el nuevo juego 
const allVideogames= ()=> {
    const games= Videogame.findAll();
    return games;
}

module.exports= {
    allVideogames
}