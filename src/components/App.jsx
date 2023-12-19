import React, { useState, useEffect } from 'react';
import logo from '../logo1.svg';
import '../App.css';
// import '../styles.css';
import ApplicantForm from './ApplicantForm';
import QuoteForm from './QuoteForm';
import axios from 'axios';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [companys, setCompanys] = useState([]);

  const getCustomers = () => {
    axios
      .get("/customers")
      .then((res) => {
        setCustomers(res.data);
      })
      .catch((error) => {
        console.error(`Error in retrieving customers: ${error}`);
      });
  };

  const getCompanys = () => {
    axios
      .get("/companys")
      .then((res) => {
        setCompanys(res.data);
      })
      .catch((error) => {
        console.error(`Error in retrieving companys: ${error}`);
      });
  };

  const addCustomer = (Customer) => {
    axios
      .post("/customers", Customer)
      .then(() => {
        getCustomers();
      })
      .catch((error) => {
        console.error(`Error in adding Customer: ${error}`);
      });
  };

  const addCompany = (Company) => {
    axios
      .post("/companys", Company)
      .then(() => {
        getCompanys();
      })
      .catch((error) => {
        console.error(`Error in adding Company: ${error}`);
      });
  };

  useEffect(() => {
    getCustomers();
    getCompanys();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='main'>
          <QuoteForm addCustomer={addCustomer}/>
          <ApplicantForm addCompany={addCompany}/>
          <p>Valor Security, Inc<br></br>Express Written Consent Form MARKETING AUTHORIZATION:<br></br>By clicking submit, I, the undersigned, hereby authorize Valor Security, Inc (“Valor Security”), directly or through its affiliates and marketing partners, to contact me from time-to-time by telephone, text, email and/or direct mail with information and offers about products and services that might interest me. By clicking contact me below, I hereby authorize the receipt of such solicitations at the telephone number(s), (including cellular numbers), emails address(es) and/or mailing address(es) shown below, even if such telephone number(s), email address(es) or mailing addresses are listed on any “do not call” or other do not solicit registry or list and I agree that any such telephone calls and text messages may be generated using an automated phone dialing system. To discontinue or opt out of text messages reply with stop. I understand I am not required to consent to make a purchase.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
