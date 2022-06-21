//Yuna Jung
//30097062
//COMP229 S2022 MidTerm Test
//June 25 2022

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let movies = require('../models/movies');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    movies: ''
   });
});

module.exports = router;
