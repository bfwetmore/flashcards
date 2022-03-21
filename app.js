const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('PWN THE NOOBS, For Breakfast lunch and dinner!')
} );


console.log("Server successfully started")
app.listen(process.env.PORT || 3000);