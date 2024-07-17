const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (ws) => {
    console.log("Connected");

    ws.send("Halo ini testing");

    ws.on("message", (message) => {
        ws.send(`Pesan Anda: ${message}`);
    });
});
