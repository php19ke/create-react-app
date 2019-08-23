import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';

function productReducer(state = ['default1', 'default2'], action) {
    return state;
}

function userReducer(state = 'defaultState', action) {
    if (action.type === 'updateUserState') {
        return action.payload.newState;
    }

    return state;
}

const allReducers = combineReducers({
    product: productReducer,
    user: userReducer
});

const action = {
    type: 'updateUserState',
    payload: {
        newState: 'New State'
    }
};

const store = createStore(
    allReducers,
    { // provide preloadedState for reducers
        product: ['iphone', 'ipad', 'macbook']
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState()); // state of our store before dispatch the action

store.dispatch(action); // this is you do it

console.log(store.getState()); // state of our store after dispatch the action

ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();