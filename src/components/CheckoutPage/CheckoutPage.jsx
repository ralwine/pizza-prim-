import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


export function CheckoutPage() {

  const tableList = useSelector(store => store.cart)
    console.log(tableList)

    const custInfo = useSelector(store => store.custInfo)

  return (<div>
    <div>

    <h2>Step 3: Review Your Information</h2>
    <div>
        {custInfo.map((cust, index) =>
          <div className='cust-info'>
            <div key={index}>
              <h3>{cust.customer_name}</h3>
              <h3>{cust.street_address}</h3>
              <h3>{cust.city}</h3>
              <h3>{cust.zip}</h3>
            </div>
            <div className='cust-info'>
              <h1>For {cust.type}</h1>
            </div>
          </div>
        )}
        <hr />
      </div>

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
