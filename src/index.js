import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import debug from 'debug';
import session from 'express-session';
import config from '../src/db/config/config';
import passport from 'passport';
import { facebookStrategy, twitterStrategy, googleStrategy,  SerializeSetup } from './socialAuthConfig/SocialConfig';
import router from './routes/index';


const log = debug('App');

const { port } = config

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'yaw',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user)
});

// SerializeSetup();
app.use(passport.initialize());
app.use(passport.session());

passport.use(facebookStrategy);
passport.use(twitterStrategy);
passport.use(googleStrategy);

app.use(router)

app.get('/', (req, res) => res.status(200).json({ Welcome: 'Welcome to YAW' }));
app.get('*', (req, res) => res.status(404).json({ Welcome: 'Route not Found' }));


const server = app.listen(port, () => log(`App is listening on port ${port}!`));

export default server;




