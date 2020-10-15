require('dotenv/config');
const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// Google Login
exports.googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then((response) => {
      const { email_verified, name, email } = response.payload;

      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: 'Something went wrong...'
            });
          } else {
            if (user) {
              const payload = {
                user: {
                  id: user.id
                }
              };
              const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '5d'
              });
              const { _id, email, name } = user;
              return res.json({
                token,
                user: { _id, email, name }
              });
            } else {
              let password = email + process.env.JWT_SECRET;
              user = new User({ name, email, password });
              user.save((err, data) => {
                if (err) {
                  console.log('Error in saving user', err);
                  return res.status(400).json({
                    error: 'User signup failed with google'
                  });
                }
                const payload = {
                  user: {
                    id: user.id
                  }
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                  expiresIn: '5d'
                });
                const { _id, email, name } = user;
                return res.json({
                  token,
                  user: { _id, email, name }
                });
              });
            }
          }
        });
      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
};
