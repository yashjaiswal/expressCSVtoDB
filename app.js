const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./src/api-routes/routes.js');
require('dotenv').config()



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;

var promise = new Promise(function (resolve, reject) {
    app.listen(port);
    resolve(port);
})

promise.then(
    function (port) {
        console.log("CalorifyMe app has been started on port: " + port);  /* handle a successful result */
    }).catch(function (port) {
        console.log("Failed to start on port: " + port);
    });

app.use('/api', routes.router);







