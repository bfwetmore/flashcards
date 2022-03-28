const express = require('express');

const app = express();
app.set('view engine', 'pug');



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is buried in Grants tomb?"});
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

console.log("Server successfully started");
app.listen(process.env.PORT || 3000, () => {
    console.log('The application is running on localhost:3000');
});
