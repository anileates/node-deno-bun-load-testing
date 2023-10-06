const UDP = require("dgram");

const server = UDP.createSocket("udp4");

const port = 2222;

const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

server.on("listening", () => {
  // Server address it’s using to listen

  const address = server.address();

  console.log("Listining to ", "Address: ", address, "Port: ", address.port);
});

server.on("message", async (message, info) => {
  const user = JSON.parse(message.toString());

  await collection.insertOne(user);

  server.send(Buffer.from("200"), info.port, info.address, (err) => {
    if (err) {
      console.error("Failed to send response !!");
    } else {
      console.log("Response send Successfully");
    }
  });
});

server.bind(port);
