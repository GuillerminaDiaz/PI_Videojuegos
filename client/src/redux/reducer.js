import { ALL_VIDEOGAMES, ALL_GENRES, CLEAN_VIDEOGAMES, NEXT_PAGE, PREV_PAGE, SEARCH_VIDEOGAMES, CLEAN_NAME, CREATE_VIDEOGAME, FILTER_GENRE, FILTER_ORIGIN, ORDER_NAME, ORDER_RATING, CURRENT_PAGE,  } from "./action-types";

const initialState={
    numPage:1,
    allVideogames: [],
    genres:[],
    renderVideogames:[],
    
};
const reducer=(state= initialState, action)=>{
    switch (action.type) {
        case ALL_VIDEOGAMES:
            return{
                ...state,
                allVideogames: action.payload,
                renderVideogames: action.payload
            }
        case ALL_GENRES:
            return{
                ...state,
                genres: action.payload
            }
        case CLEAN_VIDEOGAMES:
            return{
                ...state,
                allVideogames:[],
                genres:[],
                renderVideogames:[]
            }
        case NEXT_PAGE:
            return{
                ...state,
                numPage: state.numPage + 1
            }
        case PREV_PAGE:
            return{
                ...state,
                numPage: state.numPage - 1
            }
        case CURRENT_PAGE:
            return{
                ...state,
                numPage: action.payload
            }
        case SEARCH_VIDEOGAMES:
            return{
                ...state,
                renderVideogames: action.payload
            }
        case CLEAN_NAME:
            return{
                ...state,
                renderVideogames:[]
            }
        case CREATE_VIDEOGAME:
            return{
                ...state
            }
        case FILTER_GENRE:
            const videogames= [...state.allVideogames]
            let videogamesGenre= videogames.filter(game=> game.Genres.includes(action.payload))
            return{
                ...state,
                renderVideogames:
                action.payload === 'allVideogames'
                ?[...state.allVideogames] 
                :videogamesGenre
            }
        case FILTER_ORIGIN:
            const games= state.allVideogames
            const videogamesOrigin=  action.payload === 'created'? games.filter(game=> game.created) : games.filter(game=> !game.created)
            console.log(videogamesOrigin);
            return{
                ...state,
                renderVideogames:
                action.payload === 'allVideogames'
                ? state.allVideogames
                : videogamesOrigin
            }
        case ORDER_NAME:
            const videogamesCopy= [...state.renderVideogames]
            const sortGames= action.payload==='A'
                    ? videogamesCopy.sort((a, b)=>{
                        if(a.name.toLowerCase()> b.name.toLowerCase()) {return 1}
                        if(a.name.toLowerCase()< b.name.toLowerCase()) {return -1}
                        return 0;
                    })
                    :  videogamesCopy.sort((a, b)=>{
                        if(a.name.toLowerCase()> b.name.toLowerCase()) {return -1}
                        if(a.name.toLowerCase()< b.name.toLowerCase()) {return 1}
                        return 0;
                    })
            return{
                ...state,
                renderVideogames: action.payload==='no'
                ? [...state.allVideogames] 
                :sortGames
                    
            }
        case ORDER_RATING:
            const allVideogamesCopy= [...state.renderVideogames]
            const sortRate=action.payload=== 'A'?
                    allVideogamesCopy.sort((a,b)=> a.rating - b.rating) :
                    allVideogamesCopy.sort((a,b)=> b.rating - a.rating)
            return{
                ...state,
                renderVideogames:sortRate   
            }
       

        default:
            return {...state};
    }
};

export default reducer;