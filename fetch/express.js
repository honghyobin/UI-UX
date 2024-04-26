const express = require('express')
const cors = require('cors');
const app=express();

app.use(cors({
    origin : "http://127.0.0.1:5500",
    credentials : true
}))

app.get('/',(req,res)=>{
    const jsonDate = new Array();
    jsonDate.push({"name": "Yoonji"});
    jsonDate.push({"name": "Minji"});
    jsonDate.push({"name": "Hyunji"});
    res.send(jsonDate);
});

app.post('/',(req,res)=>{
    const jsonDate = new Array();
    jsonDate.push({"phone": "samsung"});
    jsonDate.push({"phone": "ipphone"});
    res.send(jsonDate);
});

app.listen(3003);