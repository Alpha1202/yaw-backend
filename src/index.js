import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import debug from 'debug';
import config from '../src/db/config/config';

const log = debug('App');

const { port } = config;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json({ Welcome: 'Welcome to YAW' }));

app.listen(port, () => log(`App is listening on port ${port}!`));
