const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("chat message", (msg) => {
    console.log("Nasabah => " + msg);
    io.emit("chat message", msg);
  });

  socket.on("chat message ps", (msg) => {
    console.log("Pengurus Satu => " + msg);
    io.emit("chat message ps", msg);
  });

  socket.on("chat message pd", (msg) => {
    console.log("Pengurus Dua => " + msg);
    io.emit("chat message pd", msg);
  });

  socket.on("send_notification", (data) => {
    console.log("Pengurus Dua => " + data);
    io.emit("display_notification", data);
  });
});

server.listen(port, () => {
  console.log("Server listening on port " + port);
});
