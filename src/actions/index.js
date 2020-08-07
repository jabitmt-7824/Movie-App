

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';

// action creators
export function addMovies(movies){
    return({
        type: ADD_MOVIES,
        movies
    });
}

export function addFavourite(movie){
    return({
        type: ADD_TO_FAVOURITE,
        movie
    });
}

export function removeFavourite(movie){
    return({
        type: REMOVE_FROM_FAVOURITE,
        movie
    });
}

export function showFavourite(val){
    return({
        type: SHOW_FAVOURITE,
        val
    });
}