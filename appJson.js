'use strict';
let express = require('express');
let app = express();

//post方式
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/users', function (req, res) {
    res.send(req.body.input);
});
var server = app.listen(2050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
