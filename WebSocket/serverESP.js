const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    // Broadcast to all connected clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('something');
});

wss.on('error', (error) => {
  console.error(`WebSocket error: ${error}`);
});

console.log('WebSocket server is running on ws://localhost:8080');
