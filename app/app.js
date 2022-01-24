const express = require('express');
const app = express();

const meerkats=[
    {name: "Aleksandr", age: 30},
    {name: "Sergei", age:77},
    {name: "Maiya", age: 25},
    {name: "Oleg", age: 5}
];

app.get('/', function (req, res) {
    res.send('Hello Shraddha')
});

app.listen(3000, function () {
    console.log('App listening on port 3000!')
})