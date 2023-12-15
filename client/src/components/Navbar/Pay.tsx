import React from 'react'


import './Pay.css'

const Pay: React.FC = () => {
    return (   <>
<form className="form" >
  <header>
    Credit card information
    <span className="message">Fill the form to continue.</span>
  </header>
  <label>
    <span>Card Number</span>
    <input
      placeholder="Type your card number"
      className="input"
      type="number"
      required
    />
  </label>
  <label>
    <span>Name on card</span>
    <input
      placeholder="Type your name as appear on card"
      className="input"
      type="text"
      required
    />
  </label>
  <fieldset>
    <label className="sm">
      <span>Exp. Month</span>
      <div className="custom-select">
        <select className="input"  required>
          <option />
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>Dicember</option>
        </select>
      </div>
    </label>
    <label className="sm">
      <span>Exp. Year </span>
      <div className="custom-select">
        <select className="input"  required>
          <option />
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
        </select>
      </div>
    </label>
    <label className="sm">
      <span>CW </span>
      <input
        className="input"
      
        size={4}
        maxLength={4}
        type="text"
        
      />
    </label>
  </fieldset>
  <div className="submitCard">
    <button>Complete payment</button>
  </div>
</form>
</>
)}

export default Pay
