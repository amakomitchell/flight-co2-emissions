import {coordinates} from "./middleware/coordinates";
import express from "express";
import cors from 'cors';

const [port] = process.argv.slice(2);

const parsedPort = port ? parseInt(port, 10) : 3030;

const app = express();

app.use(cors());

app.get('/', (_, res) => {
  res.send('South Pole Airport API');
});

app.get("/:iata", coordinates);

app.listen(parsedPort, () => {
  console.log(`Listening on port "${parsedPort}" ...`);
});
