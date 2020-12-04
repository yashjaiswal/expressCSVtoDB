const { response } = require('express');
const express = require('express');
const { resolve } = require('path');
const path = require('path');
var router = express.Router();


router.post('/csv', (req, res) => {

    var filename = req.param('file');
    var ext = path.extname(filename);
    if (ext === ".csv") {
        let csvImport = require("../model/csvToDB.js");
        csvImport.csvToDB(filename, (result) => { return res.send(result); });

    }
    else {
        return res.send("CSV file format not found");
    }
});



router.get('/users', (req, res) => {
    let dbExport = require("../model/dbToJSON");
    dbExport.dbToJSON((result) => { return res.send(result); }
    )
});

router.get('/hello', (req, res) => {
    res.send('Hello World!')
});

router.get('/', (req, res) => {
    res.send("Api is working fine")
});

module.exports = { router };