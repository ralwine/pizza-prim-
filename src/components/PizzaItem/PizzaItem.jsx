import React from 'react';
import { useState } from 'react';

export function PizzaItem({ index, pizza }) {

  const[buttonStatus, setButtonStatus] = useState(true)

  function addToCart(){
      console.log('adding')
      setButtonStatus(!buttonStatus)
  }

  function removeFromCart(){
    console.log('removing')
    setButtonStatus(!buttonStatus)
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
