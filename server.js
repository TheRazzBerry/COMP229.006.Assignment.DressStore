// Define dependencies
const express = require('express');

// Define project constants
const app = express();
const port = 3000;

// Define routes
app.get('/', (req, res) => {res.send('Hello World')});

app.listen(port, () => {
    console.log('Application is listening on PORT: ' + port);
});