const { response } = require('express');

function dbToJSON(resolve) {
    var mysql = require('mysql');

    var fs = require('fs');

    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });

    connection.connect();

    connection.query('select * from hBsrxMId5P.users_steps;', function (err, result, fields) {
        if (err) throw err;
        return resolve(JSON.stringify(result));

    }
    )
}

module.exports = { dbToJSON };