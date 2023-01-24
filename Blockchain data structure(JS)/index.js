const express=require('express');
const blockchain = require('./blockchain');
const bodyparser = require('body-parser')

const app = express();

const myblockchain=new blockchain()


app.use(bodyparser.json())
app.get('/api/blocks',(req,res)=>{
    res.json(myblockchain.chain)
})
app.post('/api/mine',(req,res)=>{
    const {data} = req.body
    myblockchain.addBlock({data});
    res.redirect('/api/blocks')
})

app.listen(3000,()=>{
    console.log("Hi bro")
})