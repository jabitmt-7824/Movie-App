import {combineReducers} from 'redux';
import {ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SHOW_FAVOURITE} from '../actions/index';

const initialMovieState = {
    list: [],
    favourite: [],
    showFavourite: false
};

export function movies(state = initialMovieState, action){
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

const initialSearchState = {
    result: {}
};

export function search(state = initialSearchState, action){
    return state;
}

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// };

// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
});