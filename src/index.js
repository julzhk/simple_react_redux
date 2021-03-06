import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import {Provider} from "react-redux";


const rootReducer = combineReducers(
    {
        counterState: counterReducer,
        resultState: resultReducer
    }
)
const logger = store => {
    //returns a function
    return next => {
        //returns a function again!
        return action => {
            console.log('[middleware] dispatching ',action)
            console.log('[middleware] current state ',store.getState())
            const result = next(action)
            console.log('[middleware] next state ',store.getState())
            return result
        }
    }
}

// add 'enhancer(s) & dev tools - ie middleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));


ReactDOM.render(<Provider store={store}><App/></Provider>,
    document.getElementById('root'));
registerServiceWorker();
