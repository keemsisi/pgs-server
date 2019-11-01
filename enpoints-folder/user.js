var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var handler = require('../handlers/handlers');
var path = require('path');
var multer = require('multer');


  /**
 * The below headers are the CORS activated to allow some request
 * This must be there..
 * The reponse will be sent with these headers
 */
router.use(express.static(path.join(__dirname, 'public/users'))); // the pgs-app home 

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

router.use(express.json({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000}));
router.use(express.static(path.join(__dirname, 'public')));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/users')
});

/** Check if the user email address already exists */
router.post('/email/exists', function(req, res, next) {
  var email = req.body.email;
  handler.checkIfUserEmailExist(email , res);
});

router.post('/spNumber/exists', function(req, res, next) {
  var spNumber = req.body.spNumber;
  // console.log(spNumber)
  // console.table(req.body);
  handler.checkIfUserExist(spNumber , res);
  // next();  
});

/* INSERT users listing.*/
router.post('/add', function(req, res, next) {
  var document = req.body;
  console.log(document)
  handler.insertNewStaff(document , res , null);
});

router.get('/:start/:end', function(req, res, next) {
  handler.getUsers(req.params.start , req.params.end , res);
});


// grant a user access to the dashboard 
router.post('/grant',multer().any(), function(req, res, next) {
  console.log(req.body)
  handler.verifyUserLoggingCredentials(req.body.spNumber , req.body.password , res);
});


// count the users 
router.get('/count', function(req, res, next) {
  handler.countUsers(res);
});


// count the users 
router.delete('/all-users', function(req, res, next) {
  handler.dropUsers(res);
});



// //working
// router.post('/register',multer().any() , function(req, res, next) {
//   // router.post('/register', function(req, res, next) {
//       console.log(req.body) ;
//       handler.insertAccount(req.body.loginCred.spNumber ,req.body , res);
// });
//   //working 
// router.get('/byId/:id', function(req, res, next) {
//       handler.getApplicantById(req.params.id , res);
// });
//   //working 
// router.get('/byname/:name', function(req, res, next) {
//       handler.getApplicantByName(req.params.name , res);
// });
//   //working 
// router.delete('/byname/:name', function(req, res, next) {
//       handler.deleteApplicantByFullName(req.params.name, res); 
// });
//   //working 
// router.delete('/byId/:id', function(req, res, next) {
//     handler.deleteApplicantById(req.params.id , res);
// });
//   //working 
// router.get('/all/:offset/:count', function(req, res, next) {
//     handler.getAllApplicant(res , req.params.offset , req.params.count);
// });
  
// // get user account information by id
// router.get('/:id', function(req, res, next) {
//   handler.getUserById(req.params.id,res);
// })
    
// // get user account information by id
// router.get('/:spNumber', function(req, res, next) {
//   handler.getUserByName(req.params.spNumber,res);
// });

/**********Export to the external Modules */
module.exports = router;
