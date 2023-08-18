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

const cart = (state = [], action) => {
    if (action.type === 'GET_CART') {
        console.log("payload in cart received", action.payload, state)
        return [...state, action.payload]
    }

    if (action.type === 'REMOVE_ITEM_CART') {
        const removestate = state.filter((pizza) => { pizza.id !== action.payload.id })
        console.log(action.payload, state)

        return removestate
    }
    return state
}

const totalPrice = (state = 0, action) => {
    if (action.type === 'GET_CART') {
        console.log("payload in cart received", action.payload, state)
        return state + Number(action.payload.price)
    }
    if (action.type === 'REMOVE_ITEM_CART') {
        console.log("payload in cart received", action.payload, state)
        return state - Number(action.payload.price)
    }
    return state
}

const custInfo = (state = [], action) => {
    if (action.type === 'CUST_INFO') {
        console.log("payload cust info recived", action.payload, state)
        return [...state, action.payload]
    }
    return state
}


const reduxStore = createStore(
    combineReducers({
        pizzaList,
        cart,
        totalPrice,
        custInfo
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