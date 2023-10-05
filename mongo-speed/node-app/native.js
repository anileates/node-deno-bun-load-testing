const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const http = require("http");

const server = http.createServer((request, response) => {
  let data = "";
  request.on("data", (c) => (data += c));
  request.on("end", async () => {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    const reqBody = JSON.parse(data);
    
    
    await collection.insertOne(reqBody);

    return response.end()
  });
});

server.listen(3000, () => {
  console.log("Server is running...");
});
