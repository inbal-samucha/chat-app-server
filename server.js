require('dotenv').config()
const cors = require("cors");
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const socketio = require('./socketEvents.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with id ${socket.id} joined room ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("recive_message", data)
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnectes", socket.id);
//   });
// });

const io = socketio.getIo(server);

server.listen(port, () => {
  console.log(`app listen to port ${port}`);
});
