# expressCSVtoDB
This repository contains the code I have written for a recruitment process.

## Steps to use the project:
1. Run index.js to start the HTTP server. The server starts on 8080 port.
2. Once the server has started, send HTTP requests either using Postman or browser for below mentioned APIs

## REST APIs
### 1. GET /api/users
This returns the JSON result of all the entries in the table.

### 2. POST /api/csv?file=*path/to/csvfile*
This will import the entries from the CSV file into the table as rows.

## Constraints and Info
1. This project has been built using Node.js and Express, MySQL, Visual Studio IDE
2. I have used a remote MySQL server, instead of using a local MySQL server. The MySQL database is hosted on remotemysql.com. This has been done so that you can touch and feel the project yourself, without having to create a MySQL server and a new db into your machine.

## To-DO
1. Exception and sql-insert error handling.
2. Duplicate entries handling.
