import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import combineReducer from './reducers';

const logger = ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action !== 'function') {
        console.log(action.type);
    }
    next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//     if (typeof action === 'function') {
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store = createStore(combineReducer, applyMiddleware(logger, thunk));
// console.log("store", store);
// console.log("Before STORE", store.getState());

// store.dispatch({
//     type : "ADD_MOVIES",
//     movies : [{name:"super man"}]
// });
// console.log("After STORE", store.getState());

export const StoreContext = createContext();

class provider extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <StoreContext.Provider value={store}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

ReactDOM.render(
    <provider store={store}>
        <App />
    </provider>, document.getElementById('root'));
