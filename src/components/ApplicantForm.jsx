import React, { useState } from 'react';
import '../styles.css';

const ApplicantForm = ({addCompany}) => {
  const [companyInfo, setCompanyInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    company: '',
    companyAddress: '',
    numEmployees: '',
    referred: '',
    comments: '',
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCompanyInfo({ ...companyInfo, [event.target.id]: event.target.value });
  };

  const submitForm = () => {
    addCompany(companyInfo);
  };

  return (
    <form className='form'>
      <h4>Let's get started!</h4>
      <h1>Join the Valor Team Today!</h1>
      <h3>Contact us by filling out the form below.</h3>
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
      <label>Name of Company: </label>
      <input type='text' id='company' onChange={handleChange}></input>
      <label>Business Address: </label>
      <input type='text' id='companyaddress' onChange={handleChange}></input>
      <label>Number of Employees: </label>
      <input type='text' id='numemployees' onChange={handleChange}></input>
      <label>Referred By: </label>
      <input type='text' id='referred' onChange={handleChange}></input>
      <label>Comments: </label>
      <input type='text' id='comments' onChange={handleChange}></input>
      <button onClick={submitForm}>Submit</button>
    </form>
  );
}

export default ApplicantForm;
