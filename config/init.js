const {initializeDB} = require('./database');
const { cors } = require('./cors');

module.exports = {
    init: () =>{
        initializeDB();
        cors();
    }
}