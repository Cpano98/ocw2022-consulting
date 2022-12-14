var createError = require('http-errors');
var express = require('express');
const https = require('https')
var path = require('path');
const fs = require('fs');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

/*
app.listen(process.env.PORT || 3001, function () {
  console.log("Success! Server running on port 3001");
  console.log("Enter application on: http://localhost:3001/");
  console.log("OCI public: http://129.153.93.141:3000/");
});
*/

const sslServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert','private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'cert','certificate.crt'))

},app);

sslServer.listen(3001, function(){
  console.log("Success! Server running on port 3001");
  console.log("Enter application on: https://localhost:3001/");
  console.log("OCI public: https://129.153.93.141/");
});

module.exports = app;
