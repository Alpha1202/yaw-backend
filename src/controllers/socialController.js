import models from '../db/models';
import { passwordHasher, signToken} from '../utils/index';

const { User } = models;

/**
 *@description - social auth controller class
  * @param {object} req
  * @param {object} res
  * @returns {object} response
  */
 export default class SocialController {
  /**
 *@description - class
  * @param {object} req
  * @param {object} res
  * @returns {object} response
  */
  static async socialUser(req, res) {
    try {
        const userData = req.authInfo;
        if (userData.emails === undefined) {
          
          return res.status(400).send(`We do not have access to your email, Please try signing up manually`);
        }

      const randomPassword = Math.random().toString(36).slice(-10);
      const password = await passwordHasher(randomPassword);

      let firstName, lastName;
      let lName;
      const { displayName } = userData;
      if (displayName) {
        [firstName, lName] = displayName.split(' ');
        lastName = lName === undefined ? '' : lName;
      } else {
        firstName = userData.name.familyName;
        lastName = userData.name.givenName;
      }

      const user = await User.findOrCreate({
        where: { email: userData.emails[0].value },

        defaults: {
          firstName,
          lastName,
          userName: userData.emails[0].value,
          email: userData.emails[0].value,
          password,
          isVerified: false,
          phoneNumber: '',
          about: '',
          imageUrl: userData.photos[0].value,
          verificationToken: '',
          emailNotification: true,
          category: ''
        }
      });

      if (!user) {
        return res.status(404).send(`Sorry, Your ${userData.provider} authentication failed`);
      }

      const {
        firstName: firstname,
        lastName: lastname,
        email,
      } = user[0].dataValues;

      const userInfo = { firstName: firstname, lastName: lastname, email }

      const token = signToken(userInfo)
        
      return res.status(200).json({ 
        message: `The ${userData.provider} authentication was successful`,
        user: userInfo,
        token
      })
      
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
 }
}