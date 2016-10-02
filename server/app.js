const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

//routes
const indexPage = require('./routes/index');
const events = require('./routes/events');
const features = require('./routes/features');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/../build/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexPage);
app.use('/events/', events);
app.use('/features/', features);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.send({
            message: error.message,
            error
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.send({
        message: error.message,
        error: {}
    });
});


module.exports = app;
