const csv = require('csv-parser');
const fs = require('fs');
let counter = 0;
let wordsArray = [];

fs.createReadStream('./assets/768hhT.csv')
//automatically csv-parser uses the first row as headers(columns), so to disable that you have to set headers to false
    .pipe(csv({headers : false}))
    .on('data', (row) => {
        //this line converts the row object to an array
        const rowArray = Object.keys(row);
        wordsArray.push(row[counter]);
        counter++;
        console.log(row[counter]);
    })
    .on('end', () => {
        fs.writeFileSync('./assets/results.txt', wordsArray);
        console.log('The CSV file has succesfully been processed');
    });

   /*  console.log(csvString.detect('./assets/768hhT.csv')); */