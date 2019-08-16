var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var handler = require('../handlers/handlers');

router.use('admin', express.static(path.join(__dirname , 'public/admin')));
  /**
 * The below headers are the CORS activated to allow some request
 * This must be there..
 * The reponse will be sent with these headers
 */
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000}));
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000}));

/* GET home page. */
router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
    res.redirect("/index.html");
});








// router.get('/users/count/:fileCollectioname', function(req, res, next) {
//   handler.countFiles(req.params.fileCollectioname,res);
// })

// delete an admin from the system  with a matching username 
router.delete('/:username', function(req, res, next) {
  console.log("DELETE BODY" , req.params.username);
  handler.deleteAdmin(req.params.username,res);
});


// get all the admins in the system 
router.get('/all', function(req, res, next) {
  handler.getAllAdmins(res);
});

// get all the admins in the system 
router.post('/grant', function(req, res, next) {
  console.log(req.body)
  handler.verifyAdminLogiCredentials( req.body.username , req.body.password , res);
});


// add an admin to the system
router.post('/new', function(req, res, next) {
  handler.insertAdmin(req.body,res);
});


// get all the admins in the system 
router.get('/count', function(req, res, next) {
  handler.countAdmins(res);
});



/* GET users listing. */
router.post('/exists', function(req, res, next) {
  var username = req.body.username;
  console.log(username)
  handler.checkIfAdminUsernameExist(username , res);
});


/**********************************************
 * Export the router to the external modules
 * ********************************************
 */
module.exports = router;