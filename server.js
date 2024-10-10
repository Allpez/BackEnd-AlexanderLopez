import express from "express";
import "dotenv/config.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port: " +PORT)

server.get('/',(request, response) =>{
    response.send('Hola mundo en Express')
})

server.get('/saludo',(request, response) =>{
    response.send('Hola Vienvenido al mundo Express')
})

server.get('/*',(request, response) =>{
    response.send('Page not found')
})

server.listen(PORT, ready)

// console.log(process.env.PORT);


