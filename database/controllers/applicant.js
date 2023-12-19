const Applicant = require('../models/Applicant');

exports.getAll = (req, res) => {
  return Applicant.find()
};

exports.add = (req, res) => {
  return Applicant.insertOne({})
};