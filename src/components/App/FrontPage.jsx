import React from 'react';
import { PizzaItem } from '../PizzaItem/PizzaItem';
import { Link } from 'react-router-dom';

export function FrontPage({ pizzaList }) {
  return (<>
    <h2>Step 1: Pick Your Pizza</h2>
    <img src='images/pizza_photo.png' />
    <p>Pizza is not so bad.</p>
    <div>

      {pizzaList.map((pizza, index) => <div key={pizza.id}>
        <PizzaItem
          index={index}
          pizza={pizza} />
      </div>
      )}
    </div>

    <div className="fancyDiv">
      <Link to="/order_form">
        <button className="fancyBtn">NEXT</button>
      </Link>
    </div>
  </>);
}
