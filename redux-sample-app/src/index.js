import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

function reducer(state, action) {
    if (action.type === 'changeState') {
        return action.payload.newState;
    }

    return 'state'; // default value of state
}

const action = {
    type: 'changeState',
    payload: {
        newState: 'New State'
    }
};

const action2 = {
    type: 'updateState',
    payload: {
        newState: 'Newer State'
    }
};

const store = createStore(reducer);

console.log(store.getState()); // state of our store before dispatch the action

store.dispatch(action2); // this is you do it

console.log(store.getState()); // state of our store after dispatch the action

ReactDOM.render(< App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();