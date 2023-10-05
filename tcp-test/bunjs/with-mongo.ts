const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

Bun.serve({
    websocket: {
        async message(ws, msg) {
            await collection.insertOne(JSON.parse(msg));
        },
        
        close(ws) {
            console.log("Client has disconnected");
        },
    },
    fetch(req, server) {
        if (!server.upgrade(req)) {
            return new Response(null, { status: 404 });
        }
    },
    port: 3000,
});