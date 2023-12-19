const Customer = require('../models/Customer');

exports.getAll = (req, res) => {
  return Customer.find()
};

exports.add = (req, res) => {
  return Customer.insertOne({})
};