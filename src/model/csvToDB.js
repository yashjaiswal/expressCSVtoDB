const fastcsv = require("fast-csv");
const fs = require("fs");
const mysql = require("mysql");

function csvToDB(filename, resolve) {
    let stream = fs.createReadStream(filename);
    let csvData = [];
    let csvStream = fastcsv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            csvData.shift();//removes the first line headers

            // create a new connection to the database
            const connection = mysql.createConnection({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_DATABASE
            });



            // open the connection
            connection.connect(error => {
                if (error) {
                    console.error(error);
                } else {
                    let query =
                        "INSERT INTO users_steps (id, name, date, steps, calories) VALUES ?";
                    connection.query(query, [csvData], (error, response) => {
                        console.log(error || response);
                        return resolve(response);
                    });
                }
            });
        });
    stream.pipe(csvStream);
}
module.exports = { csvToDB };
