const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/boardgames'));

app.get('/*a', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/boardgames'));
});

app.listen(process.env.PORT || 8080);