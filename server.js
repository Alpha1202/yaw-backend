import config from './src/db/config/config';
import debug from 'debug';
import app from './src/index';

const { port } = config;

const log = debug('App');

app.listen(port, () => log(`App is listening on port ${port}!`));

export default app;
