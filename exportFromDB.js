function dbToJSON(callback){
var mysql = require('mysql');

var fs = require('fs');

var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "hBsrxMId5P",
    password: "n5QNAa2LNV",
});

connection.connect();

connection.query('select * from hBsrxMId5P.users_steps;', function(err, result, fields) {
    if(err) throw err;
    return callback(JSON.stringify(result));
    
}   
)
}

module.exports={dbToJSON};