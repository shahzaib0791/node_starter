const mongoose = require('mongoose');
const { mongoURL } = require('./index');


module.exports = {
    initializeDB: () => {
        if(!mongoURL) return;
        mongoose.connect(mongoURL, (err) => {
            if(err) throw err;
            console.log("connected to db");
        });
    }
}