const express = require('express')
const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const app = express()
app.use(express.json())

app.post('/', async (req, res) => {
    await collection.insertOne(req.body);
    return res.send(200)
})

app.listen(3002, () => {
    console.log('Node server is up on port 3002.')
})