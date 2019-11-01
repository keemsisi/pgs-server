var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var handler = require('../handlers/handlers');
// router.use(express.static(path.join(__dirname, 'public/user-dashboard'))); // the pgs-app home 
/* GET home page. */

router.use(express.json({
    extended: true
}));
router.use(bodyParser.urlencoded({
    extended: true,
    limit: 1000000000000000
}));
router.use(cookieParser());

router.post('/add', function (req, res, next) {
    console.log(req.body);
    handler.insertSurvey(req.body, res);
});
router.delete('/all', function (req, res, next) {
    handler.deleteAllSurvey(res);
});
router.delete('/:id', function (req, res, next) {
    handler.deleteSurveyById(req.params.id, res);
});
router.get('/:skip/:count', function (req, res, next) {
    handler.getSurvey(res, req.params.skip, req.params.count);
});
module.exports = router;