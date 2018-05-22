const cvs = require('csvtojson');
const path = require('path');
const fs = require('fs');

const fileName = process.argv[3] || 'customer-data';
const filePath = process.argv[2] || './customer-data.csv';

cvs()
.fromFile(filePath)
.then((data) => {
	fs.writeFileSync(path.join(__dirname, `${fileName}.json`), JSON.stringify(data, null, 2));
})
.catch((err) => console.log(err));