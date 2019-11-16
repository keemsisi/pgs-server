var express = require('express');
var router = express();
var handler =  require('../handlers/handlers');
var multer = require('multer');
var bodyParser = require('body-parser');
var path = require('path');


var cookieParser = require('cookie-parser');


router.use(express.json({extended : true}));
router.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000000}));
router.use(cookieParser());

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

//working
router.post('/register',multer().any() , function(req, res, next) {
// router.post('/register', function(req, res, next) {
    console.log(req.body) ;
    // res.send("ok");
    handler.insertAccount(req.body , res);
});



//working 
router.get('/byid/:id', function(req, res, next) {
    handler.getApplicantById(req.params.id , res);
});

//working 
router.get('/byname/:name', function(req, res, next) {
    handler.getApplicantByName(req.params.name , res);
});

// get user account information by id
router.get('/byspNumber/:spNumber', function(req, res, next) {
    console.log(req.params.spNumber);
    handler.getApplicantByspNumber(req.params.spNumber,res);
});

//working 
router.delete('/byname/:name', function(req, res, next) {
    handler.deleteApplicantByFullName(req.params.name, res);

});


//united and it is working  
router.delete('/byid/:id', function(req, res, next) {
    handler.deleteApplicantById(req.params.id , res);
});

//united and it is working 
router.delete('/byspNumber/:spNumber', function(req, res, next) {
    handler.deleteApplicantByspNumber(req.params.spNumber , res);
});

//working 
router.get('/all/:offset/:count', function(req, resetpasswordres, next) {
    handler.getApplicants(res , req.params.offset , req.params.count);
});

// //working 
// router.delete("/filemappings", function(req, res, next) {
//     handler.dropAllFileMappings(res);
// });

// //working 
// router.delete("/filemappings", function(req, res, next) {
//     handler.dropAllFileMappings(res);
// });


//working 
router.delete("/all-applicants", function(req, res, next) {
    console.log('ALL USERS ARE ABOUT TO BE DELETED WITH CONNECTED COLLECTIONS');
    handler.dropApplicantCollection(res);
});




module.exports = router;