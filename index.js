const express = require('express')
const app = express()
var cors = require('cors')

const port = 3000

const categories = require ('./data/categories.json')


app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello dragon news loading')
})

app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>{
    console.log(`dragon is comming ${port}`);
})