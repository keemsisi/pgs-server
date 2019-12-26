var express = require('express');
var router = express.Router();
var handler = require('../handlers/handlers');
var multer = require('multer');

//working
router.post('/grade/:spNumber',multer().any() , function(req, res, next) {
  // router.post('/register', function(req, res, next) {
      console.log(req.params.spNumber) ;
      handler.gradeCV(req.params.spNumber , res);
});
//working 
router.get('/load/:spNumber', function(req, res, next) {
      handler.loadGradedCV(req.params.spNumber , res);
});
//working 
router.delete('/clear/:spNumber/', function(req, res, next) {
      handler.deleteApplicantByFullName(req.params.name, res); 
}); 
module.exports = router;