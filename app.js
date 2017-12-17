'use strict';

var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log('First piece of middleware');
    next();
})
app.use('/different/:id',function(req, res, next){
    console.log('Second piece of middleware, ID: ', req.params.id);
    next();
})
//catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error('Not Found');
    //set status
    err.status = 404;
    next(err);//there has been an error 
});

app.use(function(req, res, next){//error handler
    var err = new Error('Not Found');
    
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Express server is listening on port', port);
})