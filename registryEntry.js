global.isRegistered = false;
var express = require('express');
var app = express();
var regedit = require('regedit')

var ent= null;

regedit.list('HKCR\\LIQWNBLRCSWLIQMT0064') // it checks the given input's entry into registry
.on('data', function(entry) {
    isRegistered = true;
    ent = entry.data;
    console.log(entry.data);
    console.log(isRegistered);
})
.on('error', function() {
    console.log("Registry entry doesn't exist")
    console.log(isRegistered);
})
.on('finish', function () {
    console.log('list operation finished')
})

app.get('/', function (req, res) {
   //res.send('Hello World');
   res.send(ent);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

