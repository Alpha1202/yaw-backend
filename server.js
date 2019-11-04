import express from 'express';
import config from './src/db/config/config';
import debug from 'debug';
import app from './src/index';

const { port } = config;

const log = debug('App');

// const server = express();

app.listen(port, () => log(`App is listening on port ${port}!`));

