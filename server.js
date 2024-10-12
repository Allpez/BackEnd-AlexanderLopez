import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in port: " +PORT)

server.get('/',(request, response) =>{
    response.send('Hola mundo en Express')
})

//endPoint
// server.get('/saludo',(request, response) =>{
//     response.send('Hola Vienvenido al mundo Express')
// })

//endPoint
// server.get('/*',(request, response) =>{
//     response.send('Page not found')
// })

//middlewares
server.use(express.json()) //Permite tgrabajar con formato JSON en entrada y salida
server.use(express.urlencoded({ extended: true })) //Recibir peticiones complejas
server.use(cors()) //Nos deja usar
server.use(morgan('dev'))// libreria que nos va a ayudar a controlar y ver las peticiones que lleguen al servidor

//router
server.use('/api',indexRouter)

//endPoint
server.listen(PORT, ready)

// console.log(process.env.PORT);


