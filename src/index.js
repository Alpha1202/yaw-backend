import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import debug from 'debug';
import config from '../src/db/config/config';

const { port } = config;

import userRoute from './routes/user.routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/api/v1/users', userRoute);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).json({ Welcome: 'Welcome to YAW' }));
app.get('*', (req, res) => res.status(404).json({ Welcome: 'Route not Found' }));



const log = debug('App');

const server = app.listen(port, () => log(`App is listening on port ${port}!`));


export default server;




