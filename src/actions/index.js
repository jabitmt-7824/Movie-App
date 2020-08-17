

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT';
export const ADD_MOVIES_TO_LIST ='ADD_MOVIES_TO_LIST';

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

export function handleMovieSearch(movie) {
    const url = `http://www.omdbapi.com/?t=${movie}&apikey=98ced1ce`;
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie =>{
            console.log('movie', movie);
            dispatch(addSearchResult(movie));
        })
    }
}

export function addSearchResult(movie){
    return({
        type: ADD_SEARCH_RESULT,
        movie
    });
}

export function addMoviesToLIst(movie){
    return({
        type: ADD_MOVIES_TO_LIST,
        movie
    });
}