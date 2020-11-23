const express = require('express')
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


app.post('/api/csv',function(req, res) {

var filename=req.param('file');
let csvImport = require("./csvImport.js");
console.log(csvImport);
csvImport.csvToDB(filename);
return res.send("Data imported into DB successfully");
});

app.get('/api/users',function(req,res){
    let dbExport = require("./exportFromDB.js");
  dbExport.dbToJSON(function(result){
      console.log("result is"+result);
      console.log(result.toString());
      return res.send(result);
  });
    
});