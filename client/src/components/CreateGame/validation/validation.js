

export const validate =(input, allVideogames=[])=>{
    
    let errors={}
    if(! input.name) errors.name= 'Required field';
    if(input.name.length<2) errors.name= 'The name must be longer';
    
    const games= allVideogames.length!==0 && allVideogames.map((game)=> game.name.toLowerCase())
    
    if(games && games.includes(input.name.toLowerCase())) errors.name= 'Videogame name not available';
    
    if(!input.description) errors.description  = 'Required field';
    if(input.platforms.length<1) errors.platforms  = 'Required field';
    if(! input.release_date) errors.release_date  = 'Required field';
    let dateNow=  new Date(Date.now());
    let registed= new Date(input.release_date)
    if(registed > dateNow) errors.release_date = 'Date invalid' 
    if(! input.rating) errors.rating  = 'Required field';
    if(input.rating<0) errors.rating = 'Rating invalid';
    if(input.genre.length<1) errors.genres = 'Required field';
    if(input.image==='') errors.image = 'Required field';
    return errors;
}