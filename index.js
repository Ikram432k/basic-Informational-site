const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/',async (req,res)=>{
    res.send(await readFile('./home.html','utf8'));
})

app.get('/about',async (req,res)=>{
    res.send(await readFile('./about.html','utf8'));
})

app.get('/contact',async(req,res)=>{
    res.send(await readFile('./contact-me.html','utf8'));
})

app.get('/404' ,async(req,res)=>{
    res.send(await readFile('./404.html','utf8'));
})

app.listen(process.env.PORT || 3001, () => console.log(`App available on http://localhost:3001`));
