import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => console.log('Deno server is running on 3001'));