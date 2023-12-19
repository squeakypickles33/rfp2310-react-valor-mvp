import React, { useState } from 'react';
import '../styles.css';

const QuoteForm = ({addCustomer}) => {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    promo: '',
    package: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCustomerInfo({ ...customerInfo, [event.target.id]: event.target.value });
  };

  const submitForm = () => {
    addCustomer(customerInfo);
  };

  return (
    <form className='form'>
      <h4>Get a Free Quote Today</h4>
      <h1>Join Valor Security Today!</h1>
      <h3>Leave us your phone number and email and we'll contact you within 24 hours.</h3>
      <label>First Name: </label>
      <input type='text' id='firstName' onChange={handleChange}></input>
      <label>Last Name: </label>
      <input type='text' id='lastName' onChange={handleChange}></input>
      <label>Phone:</label>
      <input type='tel' id='phone' autocomplete='tel' placeholder='(555) 555-5555' required onChange={handleChange}></input>
      <label>Email: </label>
      <input type='email' id='email' onChange={handleChange}></input>
      <label>City: </label>
      <input type='city' id='city' onChange={handleChange}></input>
      <label>State: </label>
      <select id='state' onChange={handleChange}>
        <option value="" selected="selected">- Select State -</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <label>Zip Code: </label>
      <input type='zip' id='zip' onChange={handleChange}></input>
      <label>Promo: </label>
      <input type='promo' id='promo' onChange={handleChange}></input>
      <label>Package:</label>
      <select onChange={handleChange} id='package'>
        <option value='remote'>Remote $53.99</option>
        <option value='videoorautomation'>VIDEO or AUTOMATION $63.99</option>
        <option value='videolite'>Video Lite Nest Aware+ 24/7 $69.99</option>
        <option value='videoandautomation'>Video Automation Nest Aware+ 24/7 $69.99</option>
      </select>
      <button onClick={submitForm}>Submit</button>
    </form>
  );
}

export default QuoteForm;
