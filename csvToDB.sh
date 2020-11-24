#!/bin/bash

csvFolder=/home/yash/csv-files-to-import/*
processedCSV="/home/yash/imported-csv-files/"
for f in $csvFolder
do
        echo $f
mysql -e "LOAD DATA INFILE '$f'
INTO TABLE csv_users.users_steps
FIELDS TERMINATED BY ','
ENCLOSED BY '\"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;"
mv $f $processedCSV
done