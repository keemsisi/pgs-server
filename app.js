var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./enpoints-folder/index');
var usersRouter = require('./enpoints-folder/user');
var adminRouter = require('./enpoints-folder/admin') ;
var uploadRouter = require('./enpoints-folder/uploads') ;
var surveyRouter = require('./enpoints-folder/survey') ;
var applicantsRouter = require('./enpoints-folder/applicants') ;
var cors = require('cors');

var WHITE_LIST_SERVER = [
  'https://promotbotweb.herokuapp.com',
  'http://localhost:8081'
]

var CORS_OPTIONS = {
  origin : function(origin , callback) {
    if(WHITE_LIST_SERVER.indexOf(origin) !=-1){
      callback(null , true);
    }else {
      callback(new Error("You are not allowed to access the resources here for security reasons"))
    }
  }
}



var APPLICATION = express();
var bodyParser = require('body-parser');

// view engine setup
APPLICATION.set('views', path.join(__dirname, 'views'));
APPLICATION.set('view engine', 'ejs');
APPLICATION.use(logger('dev'));
APPLICATION.use(express.json());
APPLICATION.use(bodyParser.urlencoded({ extended: true , limit : 1000000000000}));
APPLICATION.use(cookieParser());


APPLICATION.use(express.static(path.join(__dirname, 'public/pgs-app'))); // the pgs-app home 
APPLICATION.set("Access-Control-Allow-Origin", "**");
APPLICATION.set("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET , PURGE , UPDATE");
APPLICATION.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
APPLICATION.set("Access-Control-Allow-Credentials", true);


APPLICATION.use('/', cors() ,indexRouter);
APPLICATION.use('/users', cors(), usersRouter);
APPLICATION.use("/admin" , cors(), adminRouter) ;
APPLICATION.use("/upload" , cors(), uploadRouter) ;
APPLICATION.use("/applicants" , cors(), applicantsRouter) ;
APPLICATION.use("/survey" , cors(), surveyRouter) ;





// catch 404 and forward to error handler
APPLICATION.use(function(req, res, next) {
  next(createError(404));
});
// error handler
APPLICATION.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = APPLICATION.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});module.exports = APPLICATION;