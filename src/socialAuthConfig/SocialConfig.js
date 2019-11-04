import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import config from '../db/config/config';
import { socialCallBack } from '../helpers/helpers';

const {
  googleConfig, facebookConfig, twitterConfig, githubConfig
} = config;

const facebookStrategy = new FacebookStrategy(facebookConfig, socialCallBack);

const twitterStrategy = new TwitterStrategy(twitterConfig, socialCallBack);

const googleStrategy = new GoogleStrategy(googleConfig, socialCallBack);

const SerializeSetUp = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => done(null, user))
      .catch(done);
  });
};

export { facebookStrategy, twitterStrategy, googleStrategy, SerializeSetUp };