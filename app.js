var express = require('express');
var app = express();
app.use(express.static('public'))
var PORT = process.env.PORT || 5000;
app.listen(PORT,function(){console.log('server started')})