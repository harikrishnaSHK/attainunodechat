const express = require('express')
const app = express()
const {WebSocketServer} = require('ws')

app.get('/',(req,res)=>{


res.sendFile(__dirname+ '/client/chat.html')

})



app.listen(3000,()=>{

console.log("Server is running on port 3000")

})



const wsServer  = new WebSocketServer({port:5000})

wsServer.on('connection',(connObj)=>{
console.log('socket connection is created ')


connObj.on('close',()=>{

console.log('connection is terminated from client')


})

connObj.on('message',(data)=>{

    console.log("Data from the client side " + data)

    wsServer.clients.forEach(function each(client){

      client.send(data)

      console.log(data + " from client side")
      

    })
    
    })


})