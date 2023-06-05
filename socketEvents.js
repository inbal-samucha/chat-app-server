const {Server} = require('socket.io')

module.exports = {
    getIo: (server) => {
        const io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
        });

        io.on("connection", (socket) => {
        console.log(`User connected ${socket.id}`);

        socket.on("join_room", (data) => {
            socket.join(data);
            console.log(`User with id ${socket.id} joined room ${data}`);
        });

        socket.on("send_message", (data) => {
            socket.to(data.room).emit("recive_message", data)
        });

        socket.on("disconnect", () => {
            console.log("User disconnectes", socket.id);
        });
     });

     return io;
    }
}