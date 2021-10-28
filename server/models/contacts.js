/* File name: contact.js
Name: Prince Duru
Student Id: 301167756
Date: 10/28/2021
ExpressPortfolio Site */

let mongoose = require('mongoose');

// model class
let contactModel = mongoose.Schema({
    Contact_Name: String,
    Contact_Number: String,
    Email_Address: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contactModel);