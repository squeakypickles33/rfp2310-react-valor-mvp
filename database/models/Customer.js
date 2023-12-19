const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  package: String,
  phone: String,
  city: String,
  state: String,
  zip: String,
  promo: String,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;