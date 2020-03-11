const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
    console.log("New connection");

    const message = "Welcome";

    socket.emit("WelcomeUser", message);

//     socket.on("return", () => {
// //     count++;
// //     // socket.emit("countUpdated", count); // sends back only to current user
//     io.emit("returnSuccess"); // sends back to all users
//     });
    
    socket.on("sendMessage", (message) => {
        io.emit("WelcomeUser", message);
    });
});

server.listen(port, () => {
    console.log("Server is up on port " + port);
});