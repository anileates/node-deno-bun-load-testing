import { MongoClient } from "npm:mongodb";

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");


Deno.serve(async (request: Request) => {
    await collection.insertOne(await request.json());

    return new Response();
  }, { port: 3000 });