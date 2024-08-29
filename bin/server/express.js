import express from 'express';

const app = express();

let server;

app.get('/', (req, res) => {
  res.send('Magic Syntax!');
});

function startServer() {
  server = app.listen(3000);
};

function stopServer() {
  if (server) {
    server.close();
  };
};

export { startServer, stopServer };