const WebSocket = require('ws');

const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
    socket.on('message', async (message) => {
        await collection.insertOne(JSON.parse(message));
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
