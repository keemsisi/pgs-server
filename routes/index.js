var express = require('express');
var router = express.Router();
var path = require('path');
router.use(express.static(path.join(__dirname, 'public/pgs-app'))); // the pgs-app home 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.redirect('/index.html');
  res.send("<h3>SERVER IS ALIVE AT THE MOMENT and SERVING : </h3>"+Date.now())
});

module.exports = router;
