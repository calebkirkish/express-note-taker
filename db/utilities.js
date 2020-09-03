const fs = require('fs');
const db =  require('./db.json');
const utils = require('utils');

const asyncReadFile = util.promisify(fs.readFile);
const asyncWriteFile = util.promisify(fs.writeFile);

class Store {
    constructor() {

    }

    readFile() {
        return asyncReadFile(db, 'utf8')
    }    

    writeFile() {
        asyncWriteFile()
    }

    async getNotes() {
        const notes = this.readFile();
        return notes
    }
}

module.exports = new Store();