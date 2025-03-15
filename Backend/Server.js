import express from "express"

const app = express()












//server
const Port = process.env.Port || 8000;
app.listen(Port, ()=>{
    console.log(`server has started ${Port}`)
})
