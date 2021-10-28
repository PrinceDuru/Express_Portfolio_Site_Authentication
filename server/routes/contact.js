/* File name: contact.js
Name: Prince Duru
Student Id: 301167756
Date: 10/28/2021
ExpressPortfolio Site authentication */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    userName: 'prince', 
    displayName: req.user ? req.user.displayName : ''
   });
});

module.exports = router;
