const express = require('express');
const path = require('path');
<<<<<<< HEAD

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {

=======
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
>>>>>>> 09f97abfa0a90c34f5ef1d494c09289f08c73563
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);