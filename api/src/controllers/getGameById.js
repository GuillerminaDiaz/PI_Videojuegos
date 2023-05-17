require('dotenv').config();
const { Videogame }= require('../db');
const { Genre }= require('../db');
const axios= require('axios');
const {API_KEY}= process.env;


const getGameById = async (idVideogame)=>{
    if(isNaN(idVideogame)){
        let gameFound= await Videogame.findByPk(idVideogame,  
            {include:{
            model: Genre,
            attributes:['name'],
            through: {
                attributes: []
              }
        }});
        if(!gameFound) throw Error(`Videogame with id ${idVideogame} does not exist`);
        const gameId= {
            id:gameFound.id,
            name:gameFound.name,
            platforms:gameFound.platforms,
            description: gameFound.description,
            rating:gameFound.rating,
            image:gameFound.image,
            release_date:gameFound.release_date,
            created: gameFound.created,
            Genres: gameFound.Genres.map((genre) => genre.name)
        }
        return gameId
    };

    const { data } = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
    if(!data.name) throw Error (`Missing videogame data with ID:${idVideogame}`);

    const game={
        id: data.id,
        name: data.name,
        image: data.background_image,
        platforms: data.parent_platforms.map(platform=> platform.platform.name),
        description: data.description_raw,
        release_date: data.released,
        rating: data.rating,
        created: false,
        Genres: data.genres.map(genre=> genre.name)

    };
    
    return game;
};

module.exports={
    getGameById
};