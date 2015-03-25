var app = require('express')();
var serveStatic = require('express').static;
var fs = require('fs');
var path = require('path');

app.use('/js', serveStatic(path.join(__dirname, 'js')));
app.use('/img', serveStatic(path.join(__dirname, 'img')));
app.use('/css', serveStatic(path.join(__dirname, 'css')));

app.get('*', function(req, res) {
   fs.createReadStream('index.html').pipe(res);
});

app.listen(3000, function() {
    console.log('server listening on port 3000');
});
