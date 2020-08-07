import {ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SHOW_FAVOURITE} from '../actions/index';

const initializedState = {
    list: [],
    favourite: [],
    showFavourite: false
}

export default function movies(state = initializedState, action){
    // if(action.type === ADD_MOVIES){
    //     return({...state, list: action.movies});
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return({...state, list: action.movies});
        case ADD_TO_FAVOURITE:
            return({...state, favourite:[action.movie, ...state.favourite]});
        case REMOVE_FROM_FAVOURITE:
            let filteredArray = state.favourite.filter(
                movie => movie.Title !== action.movie.Title
            );
            return({...state, favourite:filteredArray});
        case SHOW_FAVOURITE:
            return({...state, showFavourite:action.val});
        default:
            return state;
    }
}