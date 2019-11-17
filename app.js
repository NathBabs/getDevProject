const csv = require('csv-parser');
const fs = require('fs');
let counter = 0;

fs.createReadStream('./assets/768hhT.csv')
//automatically csv-parser uses the first row as headers(columns), so to disable that you have to set headers to false
    .pipe(csv({headers : false}))
    .on('data', (row) => {
        //this line converts the row object to an array
        const rowArray = Object.keys(row);
        console.log(row[counter]);
        counter++;
    })
    .on('end', () => {
        console.log('CSV file succesfully processed');
    });

   /*  console.log(csvString.detect('./assets/768hhT.csv')); */