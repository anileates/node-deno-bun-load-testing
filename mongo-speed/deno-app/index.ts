import express, { Application } from 'npm:express';
import { MongoClient } from 'npm:mongodb';

const app: Application = express();

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

app.use(express.json());

app.post('/', async (req, res) => {
  await collection.insertOne(req.body);

  return res.send(200);
});

app.listen(3001, () => console.log('Deno server is running on 3001'));