import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';

const pizzaList = (state = [], action) => {
    if (action.type === 'GET_PIZZA') {
        console.log("payload received", action.payload)
        return action.payload
    }
    return state
}


const reduxStore = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);