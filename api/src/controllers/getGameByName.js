const { allVideogames, dbVideogames, apiVideogames } = require('./allVideogames');
const { Op } = require("sequelize");
const {Videogame}=require('../db');
const {Genre}=require('../db');

const getGameByName = async (name) =>{
    let dbGames= await Videogame.findAll({where: { name: { [Op.iLike]: `%${name}%` } },
        include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
            }
        }    
    })
    
    dbGames= dbGames.map(game=>{
        return {
            id:game.id,
            name:game.name,
            platforms:game.platforms,
            description: game.description,
            rating:game.rating,
            image:game.image,
            release_date:game.release_date,
            created: game.created,
            Genres: game.Genres.map((genre) => genre.name)
        }
    })
    
    const apiGames= await apiVideogames();
    const apiName= apiGames.filter((game)=> game.name.toLowerCase().includes(name.toLowerCase()))
    const allGames= [...dbGames,...apiName]
    
    if(allGames.length>15){
        const someGames= allGames.slice(0,15);
        return someGames;
    }
    return allGames;
};

module.exports= {
    getGameByName
};