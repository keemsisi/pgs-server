var express = require('express');
var router = express.Router();
var path = require('path');
router.use(express.static('../public/admin-dashboard')); // the pgs-app home 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('/index.html');
});

module.exports = router;
