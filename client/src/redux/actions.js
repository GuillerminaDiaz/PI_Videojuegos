import { ALL_VIDEOGAMES, ALL_GENRES, CLEAN_VIDEOGAMES, NEXT_PAGE, PREV_PAGE, SEARCH_VIDEOGAMES, CLEAN_NAME, FILTER_GENRE, FILTER_ORIGIN, ORDER_NAME, ORDER_RATING, CURRENT_PAGE, CREATE_VIDEOGAME, } from "./action-types";
import axios from 'axios';

export const allVideogames=()=>{
    return async (dispatch) => {
            const { data }= await axios('http://localhost:3001/videogames');
            
            return dispatch({
                type: ALL_VIDEOGAMES,
                payload: data,
            });
        
    };
};

export const getAllGenres=()=>{
    return async (dispatch)=>{
        const {data}= await axios('http://localhost:3001/genres');
        return dispatch({
            type: ALL_GENRES,
            payload: data
        });
    };
};

export const cleanVideogames=()=>{
    return {type: CLEAN_VIDEOGAMES};
};

export const nextPage=()=>{
    return {type: NEXT_PAGE};
};

export const prevPage=()=>{
    return {type: PREV_PAGE};
};

export const handleNumberPage=(pageNum)=>{
    return {type: CURRENT_PAGE, payload: pageNum};
};

export const searchVideogames=(name)=>{
    return async (dispatch)=>{
    try {
         const {data}= await axios(`http://localhost:3001/videogames?search=${name}`);
        return dispatch({
            type: SEARCH_VIDEOGAMES,
            payload: data
        })
    } catch (error) {
        alert('Videogame not found')
    } 
};
};

export const cleanName=()=>{
    return {type: CLEAN_NAME};
};

export const createVideogame=(videogame)=>{
    return async (dispatch)=>{
        const {data}= await axios.post('http://localhost:3001/videogames', videogame);
        return dispatch({type: CREATE_VIDEOGAME, payload: data})
    };
};

export const filterByGenre=(genre)=>{
    return {type: FILTER_GENRE, payload:genre}
};

export const filterByOrigin=(created)=>{
    return {type: FILTER_ORIGIN, payload: created}
};

export const orderAlphabetically=(order)=>{
    return {type: ORDER_NAME, payload: order}
};

export const orderRating=(rating)=>{
    return {type: ORDER_RATING, payload: rating}
};


