var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var mail = require('./routes/send');

var app = express();

//mail
var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: 'master@cupofcodeteam.com',
    pass: 'nullpointerex'
  }
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/send', function(req, res) {
  smtpTransport.sendMail({
    from: req.body.name +" <master@cupofcodeteam.com>",
    to: "Alexis Rondon <alexrafael10@gmail.com>,Luisana Sandoval <luisanasandoval94@gmail.com> ",
    subject: req.body.subject,
    text: req.body.content + " - Correo: " + req.body.email + " - Telefono: "
      + req.body.number
  }, function (error){
    if (error){
      console.log(error);
    }else{
      console.log("Message sent");
    }
  });
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
