const {Videogame}= require('../db')

const updatedVideogame= async (idVideogame, description, platforms, image, rating)=>{
    const gameFound= await Videogame.findByPk(idVideogame);
    if(!gameFound) throw Error('Videogame not found');

    const emptyPlatforms= platforms.includes('') || platforms.length===0;
    description && Videogame.update({
        description: description
    },{
        where:{id: idVideogame}
    });

    !emptyPlatforms && Videogame.update({
        platforms:platforms
    },{
        where:{id: idVideogame}
    });

    image && Videogame.update({
        image: image
    },{
        where:{id: idVideogame}
    });

    rating && Videogame.update({
        rating: rating
    },{
        where:{id: idVideogame}
    });
    
    return await Videogame.findByPk(idVideogame);
};

module.exports={
    updatedVideogame
};