const fs = require('fs');
const db =  require('./db.json');
const util = require('util');

const asyncReadFile = util.promisify(fs.readFile);
//fs.readFile(db, (err, data)=>{})
export async function readFile () {
    // const data = await asyncReadFile(db)
    return asyncReadFile(db);
}