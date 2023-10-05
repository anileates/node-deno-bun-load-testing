import { MongoClient } from "npm:mongodb";

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const server = Deno.serve({
    handler: async (request) => {
        const { response, socket } = Deno.upgradeWebSocket(request);

        socket.onmessage = async (msg) => {
            await collection.insertOne(JSON.parse(msg.data));
        };

        socket.onclose = () => console.log("Client has disconnected");
        return response;
    },
    port: 3000,
});
