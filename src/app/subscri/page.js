"use client"
// import React, { useState } from 'next';
import { useState } from "react";

const Subscription = () => {

 const [isLoading,setLoading]=useState(false)
 const [buttonText,setButtonText]=useState('Pay Now')

 const handleClick=(event)=> {
  event.preventDefault();
  setLoading(true);
  setButtonText("Processing Payment...");

  setTimeout(function() {
    setLoading(false);
    setButtonText("Payment completed.");
  }, 3000);
}

  return (
    <>
      {/* <h1>hi</h1> */}
      <div class="credit-card-form">
    <h2>Credit Card Payment</h2>
    <form>
      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" placeholder="Card number" />
      </div>
      <div class="form-group">
        <label for="card-holder">Card Holder</label>
        <input type="text" id="card-holder" placeholder="Card holder's name" />
      </div>
      <div class="form-row">
        <div class="form-group form-column">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" placeholder="MM/YY" />
        </div>
        <div class="form-group form-column">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="CVV" />
        </div>
      </div>
      <button type="submit" class="click-button" onClick={handleClick} disabled={isLoading} > {buttonText} </button>
    </form>
  </div>
    </>
  );
};

export default Subscription;
