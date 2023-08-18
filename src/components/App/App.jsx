import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { FrontPage } from './FrontPage';
import { OrderForm } from '../OrderForm';


function App() {

  const pizzaList = useSelector(store => store.pizzaList)
  const cartList = useSelector(store => store.cart)
  const totalPrice = useSelector(store => store.totalPrice)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchPizzaList()
  }, [])

  const fetchPizzaList = () => {
    axios.get('/api/pizza')
      .then(response => {
        console.log("response.data in GET:", response.data)
        dispatch({ type: 'GET_PIZZA', payload: response.data })
      })
      .catch(error => {
        console.log("hey!", error)
      })
  }
  //GET pizza table


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          <span className='App-title'>Pizza Primé</span>
          <span>Total Price: ${totalPrice}</span>
        </h1>

      </header>

      <Router>
        <Route path='/' exact>
          <FrontPage
            pizzaList={pizzaList} />
        </Route>
        <Route path='/order_form'>
          <OrderForm />
        </Route>
        <Route path='/checkout'>

        </Route>
        <Route path='/admin'>

        </Route>
      </Router>
    </div>
  );
}

export default App;


