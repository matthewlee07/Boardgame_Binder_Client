const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/apps/boardgame-binder/deploy/github'));

app.get('/*a', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/apps/boardgame-binder/deploy/github'));
});

app.listen(process.env.PORT || 8080);