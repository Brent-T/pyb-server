const http = require('http');
const WebSocket = require('ws');
const log = require('./lib/log');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    log.info(Date.now(), msg);

    switch (msg) {
      case 'PING':
        ws.send('PONG');
        break;
      case 'PONG':
        ws.send('PING');
        break;
      default:
        ws.send('PLEASE SEND PING/PONG');
        break;
    }
  });
});

module.exports = server;
