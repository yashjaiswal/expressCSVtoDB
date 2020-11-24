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

## Shell script to import from CSV files into MySQL database
Run the shell script using command: ```sh csvToDB.sh```
The script will import all CSV files of a folder to the DB, and move the processed files to a seperate folder.
*Note:* In order to allow import of csv files to DB, empty the variable ```secure-file-priv = ""``` in ```/etc/my.cnf``` below ```[mysqld]``` (or any other conf file that mysql is using)

## Constraints and Info
1. This project has been built using Node.js and Express, MySQL, Visual Studio IDE
2. I have used a remote MySQL server, instead of using a local MySQL server. The MySQL database is hosted on remotemysql.com. This has been done so that you can touch and feel the project yourself, without having to create a MySQL server and a new db into your machine.

## To-DO
1. Exception and sql-insert error handling.
2. Duplicate entries handling.
