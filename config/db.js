// Hide Credentials
let config = require('./config');

// Database Setup
const mongoose = require('mongoose');

module.exports = function() {
    //Get MongoDB URL
    mongoose.connect(config.DBAUTH);
    // Test Connection
    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {console.log("Connected to MongoDB")});
    //Return Connection
    return mongodb;
}