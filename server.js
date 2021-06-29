const express = require('express');
const app = express();
const path = require('path');
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: 'fb636138509f454ab68cb4c59f3d35ff',
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/names', function(req, res) {
    getNames()
});

try {
    nonExistentFunction();
} catch(error) {
    console.error(error)
};

document.getElementById(nonExistentFunction).click();

const port = process.env.PORT || 4500;

app.listen(port, function() {console.log(`Server running on ${port}`)});