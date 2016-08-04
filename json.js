'use strict'
let req=require('superagent');
req
    .post('localhost:2050/users')
    .type('form')
    .set('Content-Type','application/json')
    .send('{"input":"ok"}')
    .end(function (err, res) {
        
        if (res.statusCode === 200) {
            console.log("right "+res.text);
        }
        else {
            console.log("error ");
        }
    });