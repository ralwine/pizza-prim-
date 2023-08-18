import React, { useState } from "react";
import { Link } from "react-router-dom";

export function OrderForm() {
    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [orderType, setOrderType] = useState('Delivery');
    const onOptionChange = event => {
        setOrderType(event.target.value)
    }


    const handleCustomerInfo = () => {
        console.log("inside handleCustomerInfo")
        let customerData = {
            customer_name: customerName,
            street_address: address,
            city: city,
            zip, zip,
            type: orderType
        }
        console.log("customer data from order form:", customerData)
        // Note to group - I stopped here but the form is working, and I think we want to add all this data to a global state still!!!
    }


    return (
        <div>
            <h2>Step 2: Enter Your Information</h2>
            <form>
                <input type="text" placeholder="Name" value={customerName} onChange={event => setCustomerName(event.target.value)} />
                <br />
                <input type="text" placeholder="Street Address" value={address} onChange={event => setAddress(event.target.value)} />
                <br />
                <input type="text" placeholder="City" value={city} onChange={event => setCity(event.target.value)} />
                <br />
                <input type="text" placeholder="Zip Code" value={zip} onChange={event => setZip(event.target.value)} />
                <br />
                <input type="radio" id="delivery" name="order-type" value="Delivery" className="radioBtn" checked={orderType === 'Delivery'} onChange={onOptionChange} />
                <label htmlFor="delivery">Delivery</label>
                <input type="radio" id="takeout" name="order-type" value="Takeout" className="radioBtn" checked={orderType === 'Takeout'} onChange={onOptionChange} />
                <label htmlFor="takeout">Takeout</label>
            </form>

            <div className="fancyDiv">
                {/* <Link to="/checkout"> */}
                <button className="fancyBtn" onClick={handleCustomerInfo}>NEXT</button>
                {/* </Link> */}
            </div>

        </div>

    )
}