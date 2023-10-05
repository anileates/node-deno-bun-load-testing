const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const server = Bun.serve({
    port: 3000,
    async fetch(req) {
        await collection.insertOne(await req.json());

        return new Response();
    }
})

console.log(`✅ Listening on port ${server.port}...`)

// app.get("/file", async (req, res) => {
//   // read uer from user.json

//   const user = await Bun.file("user.json").json();
//   await collection.insertOne(user);
//   return res.status(200).json({ message: "Hello World" });
// });

