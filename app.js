const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('I love Nina, and emi, and food')
} );


console.log("Server successfully started")
app.listen(process.env.PORT || 3000);