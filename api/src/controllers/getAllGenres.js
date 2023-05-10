const axios= require('axios');
const {Genre}= require('../db');
require('dotenv').config();
const { API_KEY }= process.env;

const getAllGenres= async ()=>{
    const {data} = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genre= await data.results.forEach(genre=>{
        Genre.findOrCreate({
            where:{ name: genre.name },
            defaults: {
                name:genre.name
            }
        });
    }); 
    const allGenres= await Genre.findAll();
    return allGenres;
};

module.exports={
    getAllGenres
}