const express = require('express');
const { init } = require('./config/init');


const app = express();

// initializing
init();

// set up view engine
app.set('view engine', 'ejs');


// Routes
const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');

app.use('/api', apiRoutes);
app.use('/', webRoutes);


module.exports = app;