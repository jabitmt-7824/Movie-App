import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import combineReducer from './reducers';

const logger = ({dispatch, getState}) => (next) => (action) => {
    console.log(action.type);
    return next();
}

const store = createStore(combineReducer);
// console.log("store", store);
// console.log("Before STORE", store.getState());

// store.dispatch({
//     type : "ADD_MOVIES",
//     movies : [{name:"super man"}]
// });
// console.log("After STORE", store.getState());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
