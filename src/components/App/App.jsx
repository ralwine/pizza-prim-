import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PizzaItem } from '../PizzaItem/PizzaItem';

// `/api/pizza`
// `/api/order`

//FIXXXXEEEEDDDDDD!!!!!


function App() {

  const pizzaList = useSelector(store => store.pizzaList)

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
        <h1 className='App-title'>Pizza Primé</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is not so bad.</p>
      <div>

        {pizzaList.map((pizza, index) =>
          <div key={pizza.id}>
            <PizzaItem
              index={index}
              pizza={pizza}
            />
          </div>
        )}
      </div>


    </div>
  );
}

export default App;

