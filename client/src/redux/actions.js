import { ALL_VIDEOGAMES } from "./action-types";

export const allVideogames=()=>{
    return async (dispatch) => {
            const { data }= await axios('http://localhost:3001/videogames');
            
            return dispatch({
                type: ALL_VIDEOGAMES,
                payload: data,
            });
        
    };
}