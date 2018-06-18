/**
 * Created by Ashish Goyal on 4/16/2017.
 */
var express = require('express');
var app = express();

var port = process.env.PORT || 1212;

app.get('/',function (req,res) {
   res.end('www.github.com/AshishkrGoyal/');
});

app.listen(port,function () {
    console.log('Ashish Your Application Is running On Port Number '+ port);
});
