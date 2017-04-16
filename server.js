/**
 * Created by Ashish Goyal on 4/16/2017.
 */
var express = require('express');
var app = express();

var port = 1212;

app.get('/',function (req,res) {
   res.send('<h1>www.github.com/AshishkrGoyal/</h1>');
});

app.listen(port,function () {
    console.log('Ashish Your Application Is running On Port Number '+ port);
});