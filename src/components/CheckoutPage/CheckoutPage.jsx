import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export function CheckoutPage() {

  const tableList = useSelector(store => store.cart)
    console.log(tableList)
  return (<div>
    <div>

    <h2>Step 3: Review Your Information</h2>

    </div>
    <div>
      <table>

        <thead>
          <tr>
            <th>
            YOUR ORDER
            </th>
          </tr>
        </thead>
        
        <tbody>
        {tableList.map((info, index)=>
          <tr key={index}>
            <td>{info.name} {info.id} {info.price}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
    <button className="fancyBtn">CHECKOUT</button>
  </div>);
}
