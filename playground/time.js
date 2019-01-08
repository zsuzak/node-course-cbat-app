let moment = require('moment');

let date = moment();
console.log(date.format('Do-MMM-YYYY'));
console.log(date.format('h:mm:a'));
// date.add(100,'year').subtract(9, 'months');
// console.log(date.format('DD-MMM-YY').toUpperCase());
// console.log(date.format('h:mm:a').toUpperCase());