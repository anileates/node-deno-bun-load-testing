const port = 3010;
const hostname = "127.0.0.1";

const enc = (s) => new TextEncoder().encode(s);
const dec = (b) => new TextDecoder().decode(b);

import { MongoClient } from "npm:mongodb";

const url = "mongodb://localhost:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const listener = Deno.listenDatagram({ port, transport: "udp", hostname });

for await (const conn of listener) {
  const user = await JSON.parse(dec(conn[0]));

  await collection.insertOne(user);

          await listener.send(conn[0], conn[1]);

}
