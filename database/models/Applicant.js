const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  zip: String,
  company: String,
  companyAddress: String,
  numEmployees: String,
  referred: String,
  comments: String,
});

const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;