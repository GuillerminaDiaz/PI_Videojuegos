const { allVideogames, dbVideogames, apiVideogames } = require('./allVideogames');
const { Op } = require("sequelize");
const {Videogame}=require('../db');
const {Genre}=require('../db');

const getGameByName = async (name) =>{
    const dbGames= await Videogame.findAll({where: { name: { [Op.iLike]: `%${name}%` } },
        include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
            }
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