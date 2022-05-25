'use strict'

// Traemos app, su configuracion desde src, nos permite eliminar codigo sin sentido
const app = require('./src/app')

// Variables de entorno
const dotenv = require('dotenv');
dotenv.config ()

// trabajamos con el puerto
const port = process.env.PORT || 3000;

// Socket.Io
const http = require ('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Dejamos secuencia de Io, por si a futuro retormamos la conexion
// Eliminando los metodos
io.on("connection", (socket)=>console.warn('User Connected!'))

// Hacemos que el server corra, y escuche el puerto antes configurado
server.listen(port, ()=>
    console.log(`Servidor corriendo en http://localhost:${port}`));