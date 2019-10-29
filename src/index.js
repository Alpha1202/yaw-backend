import express from 'express';
import debug from 'debug'

const log = debug('App');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => res.status(200).json({ Welcome: 'Welcome to YAW' }));

app.listen(PORT, () => log(`App is listening on port ${PORT}!`));
