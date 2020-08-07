{
    // type: "ADD_MOVIES",
    // movies: [m1,m2]
}

// action type
export const ADD_MOVIES = 'ADD_MOVIES';

// action creator
export default function addMovies(movies){
    return({
        type: ADD_MOVIES,
        movies
    });
}