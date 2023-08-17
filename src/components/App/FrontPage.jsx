import React from 'react';
import { PizzaItem } from '../PizzaItem/PizzaItem';

export function FrontPage({pizzaList}) {
  return (<>
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
      <button className="fancyBtn">NEXT</button>
    </div>
  </>);
}
