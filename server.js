// Define dependencies
const express = require('express');
const mongoose = require('mongoose');

// Define project constants
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {res.send('Hello World')});

// Connect to MongoDB
const mongoDB_url = "mongodb+srv://razzberry:comp229pass@comp229cluster.hkh7vxl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB_url).then(() => {
    console.log('Connected to MongoDB');

    // Start the application and listen for events
    app.listen(port, () => {
        console.log('Application is listening on PORT: ' + port);
    });
}).catch((error) => {
    console.log(error);
});