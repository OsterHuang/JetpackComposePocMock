var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var landingRouter = require('./routes/landing');
var accountRouter = require('./routes/account');

var errorSample = require('./routes/error-sample')
var adminUsersRouter = require('./routes/admin/admin-user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin-user', adminUsersRouter);
app.use('/', landingRouter);
app.use('/', accountRouter);
app.use('/error-sample', errorSample);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.error(`[${err.status}] - `, err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if (err.status == 401) {
    res.json({
      msgCode: `${err.message}`,
      msgContent: "Token invalid....",
      result: {}
    })
  } else {
    res.json({
      msgCode: `${err.status}`,
      msgContent: `${err.message}`,
      result: {}
    })
  }


  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
