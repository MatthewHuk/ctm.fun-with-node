const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello Shraddha')
});


app.listen(3000, function () {
    console.log('App listening on port 3000!')
})