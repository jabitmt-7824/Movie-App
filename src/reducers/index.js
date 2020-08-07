import {ADD_MOVIES} from '../actions/index';

const initializedState = {
    list: [],
    favourite: []
}

export default function movies(state = initializedState, action){
    if(action.type === ADD_MOVIES){
        return({...state, list: action.movies});
    }
    return state;
}