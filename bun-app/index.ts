import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(3000, () => console.log('Server is running on 3000'));