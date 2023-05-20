const { Videogame }= require('../db');
const {Genre}=require('../db');
const axios= require('axios');
require('dotenv').config();
const { API_KEY }= process.env;

const dbVideogames= async ()=>{ 
    let gamesdb= await Videogame.findAll({
        include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
              }
        }
    });
    gamesdb= gamesdb.map(game=>{
        return({ 
            id:game.id,
            name:game.name,
            platforms:game.platforms,
            image:game.image,
            release_date:game.release_date,
            created: game.created,
            Genres: game.Genres.map((genre) => genre.name)
        })
    })
    return gamesdb;
}
const apiVideogames= async()=>{
    let allInfoGames=[];
    let i=1;
    while(i<6){
        let {data}= await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
        allInfoGames=[...allInfoGames,...data.results]; 
        i++;
    }
    const apiGames= allInfoGames.map(game=>{
        return({
            id:game.id,
            name: game.name,
            platforms: game.parent_platforms.map(platform=> platform.platform.name),
            image: game.background_image,
            release_date:game.released,
            rating: game.rating,
            created: false,
            Genres: game.genres.map(genre=> genre.name)
        });
        
    }
    );
    return apiGames;
}

const allVideogames= async ()=> { 
    
    const gamesdb= await dbVideogames();
    const apiGames= await apiVideogames();
     
    return [...gamesdb,...apiGames] 
};


module.exports= {
    allVideogames,
    dbVideogames,
    apiVideogames
}