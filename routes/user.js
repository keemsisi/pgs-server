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


/* GET users listing. */
router.post('/exists', function(req, res, next) {
  var SpNo = req.body.SpNo;
  console.log(SpNo)
  handler.checkIfApplicantSpNoExist(SpNo , res);
});


/* INSERT users listing. */
router.post('/add', function(req, res, next) {
  var document = req.body;
  console.log(document)
  handler.insertUser(document , res , null);
});

router.get('/:start/:end', function(req, res, next) {
  handler.getUsers(req.params.start , req.params.end , res);
});


// grant a user access to the dashboard 
router.post('/grant', function(req, res, next) {
  handler.verifyUserLoggingCredentials(req.body.SpNo , req.body.password , res);
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
//       handler.insertApplicant(req.body.loginCred.SpNo ,req.body , res);
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
// router.get('/:SpNo', function(req, res, next) {
//   handler.getUserByName(req.params.SpNo,res);
// });

/**********Export to the external Modules */
module.exports = router;
