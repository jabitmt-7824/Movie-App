import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import combineReducers from './reducers';

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

const store = createStore(combineReducers, applyMiddleware(logger, thunk));
// console.log("store", store);
// console.log("Before STORE", store.getState());

// store.dispatch({
//     type : "ADD_MOVIES",
//     movies : [{name:"super man"}]
// });
// console.log("After STORE", store.getState());

// const StoreContext = createContext();

// class Provider extends React.Component {
//     render() {
//         const { store } = this.props;
//         return (
//             <StoreContext.Provider value={store}>
//                 {this.props.children}
//             </StoreContext.Provider>
//         );
//     }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//     return function (Component) {
//         class ConnectedComponent extends React.Component {
//             constructor(props) {
//                 super(props);
//                 this.unsubscribe = this.props.store.subscribe(() => {
//                     this.forceUpdate();
//                 });
//             }

//             componentWillUnmount() {
//                 this.unsubscribe();
//             }
//             render() {
//                 const { store } = this.props;
//                 const state = store.getState();
//                 const dataToBeSentAsProps = callback(state);

//                 return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//             }
//         }

//         class ConnectedComponentWrapper extends React.Component {
//             render() {
//                 return (
//                     <StoreContext.Consumer>
//                         {(store) => {
//                             return <ConnectedComponent store={store} />;
//                         }}
//                     </StoreContext.Consumer>
//                 );
//             }
//         }
//         return ConnectedComponentWrapper;
//     };
// }



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
