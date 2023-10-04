import { MongoClient } from "mongodb";
import express from "express";

// const { MongoClient } = require("mongodb");
// const express = require("express");

const url = "mongodb://host.docker.internal:27017/some-db";
const client = new MongoClient(url);
client
  .connect()
  .then(() => console.log("Connected successfully to server"))
  .catch(console.error);

const db = client.db("some-db");
const collection = db.collection("users");

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const savedUser = await collection.insertOne({ name: "anil", age: 23 });

  return res.send(200);
});

app.get("/file", async (req, res) => {
  // read uer from user.json

  const user = await Bun.file("user.json").json();
  await collection.insertOne(user);
  return res.status(200).json({ message: "Hello World" });
});

const PORT = 3003;
app.listen(PORT, () => console.log("Server is running...", PORT));
