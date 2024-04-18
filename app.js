var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var connectMongoDb = require('./dbconfig/connection');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var dashboardRouter = require('./routes/dashboard');
var practiceRouter = require('./routes/practice');
var testRouter = require('./routes/test');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/views/'));

app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);
app.use('/', dashboardRouter);
app.use('/', practiceRouter);
app.use('/', testRouter);
app.use('/users', usersRouter);

// Start the mongoose server
connectMongoDb();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
