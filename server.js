
const express = require('express');
const dbOperation=require('./dbFiles/dbOperation');
const cors = require('cors');

// const API_PORT = process.env.PORT || 33333;
// const app = express();

// app.use(cors());

// app.get('/api',function (req,res){
//     console.log('Listening');
//     res.send({result:"Hello"})
// })


// app.get('/quit',function (req,res){
//     console.log('Called quit');
//     res.send({result:"Good bye!"})
// })

 dbOperation.getAngajati().then(res=> {
    console.log(res);
 })

// app.listen(API_PORT,() => console.log(`Listening on port ${API_PORT}`));