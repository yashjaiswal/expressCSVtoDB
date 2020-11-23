const fastcsv = require("fast-csv");
const fs = require("fs");
const mysql = require("mysql");

function csvToDB(filename){
let stream = fs.createReadStream(filename);/*"users-steps2.csv"*/
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
   
    csvData.shift();//removes the first line headers

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "remotemysql.com",
      user: "hBsrxMId5P",
      password: "n5QNAa2LNV",
      database: "hBsrxMId5P"
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
        });
      }
    });
  });

stream.pipe(csvStream);
}
module.exports={csvToDB};
