const { Videogame } = require('../db');
const { Genre } =require('../db');


const postNewVideogame= async (name, description, platforms, image, release_date, rating, genre)=>{
    const gameExist= await Videogame.findAll({where: {name}});
     
    if(gameExist.length>0) throw Error ('Videogame already exist');
    const newGame= await Videogame.create({
        name, 
        description, 
        platforms, 
        image, 
        release_date, 
        rating
    })
    const genreGame= await Genre.findAll({
        where:{
            name: genre
        }
    })
    await newGame.addGenre(genreGame);
    return newGame;
};

module.exports= {
    postNewVideogame
}