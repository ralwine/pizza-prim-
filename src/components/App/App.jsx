import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FrontPage } from './FrontPage';


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
        console.log(response.data)
        //TODO add payload after setup
        dispatch({
          type: 'GET_PIZZA',
          payload: response.data
        })
          .catch(error => {
            console.log("hey!", error)
          })
      })
  }
  //GET pizza table


  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Total Price: ${totalPrice}</h2>
        <h1 className='App-title'>Pizza Primé</h1>

      </header>

      <Router>
        <Route path='/' exact>
          <FrontPage
            pizzaList={pizzaList} />
        </Route>
        <Route path='/order_form'>

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


