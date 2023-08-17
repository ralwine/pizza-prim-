import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function PizzaItem({ index, pizza }) {
  const dispatch = useDispatch()


  const[buttonStatus, setButtonStatus] = useState(true)

  function addToCart(){
      console.log('adding')
      setButtonStatus(!buttonStatus)

      let pizzaItem = {
        name: pizza.name,
       id: pizza.id,
       price: pizza.price

      }

      dispatch({
        type: 'GET_CART',
        payload: pizzaItem
      })
  }

  function removeFromCart(){
    console.log('removing')
    setButtonStatus(!buttonStatus)

    let pizzaItem = {
      name: pizza.name,
     id: pizza.id,
     price: pizza.price

    }

    dispatch({
      type: 'REMOVE_ITEM_CART',
      payload: pizzaItem
    })
  }

  return (<><li><b>{pizza.name}:</b> {pizza.description} - {pizza.price}</li>
    {buttonStatus ? (
    <button id="addItem" onClick={addToCart}>
      ADD TO CART
    </button>): (<button id="removeItem" onClick={removeFromCart}>
      REMOVE ITEM
    </button>)} 
  </>)
}
