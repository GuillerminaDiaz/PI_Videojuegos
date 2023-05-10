import { ALL_VIDEOGAMES } from "./action-types";
const initialState={
    videogames: [],
    videoGameDetail: {}
};
const reducer=(state= initialState, action)=>{
    switch (action.type) {
        case ALL_VIDEOGAMES:
            return{
                ...state,
                videogames:[...action.payload]
            }
    
        default:
            return {...state};
    }
};

export default reducer;