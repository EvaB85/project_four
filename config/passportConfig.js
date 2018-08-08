require('dotenv').config()
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.serializeUser(function(user, done){
  console.log('serialize user')
  console.log(user)
  done(null, user);
})

passport.deserializeUser((user, done) => {
        done(null, user);
    });
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback'
  },
  (token, refreshToken, profile, done) => {
    console.log(profile)
      return done(null, {
        profile: profile,
        token: token
      });
    }));
module.exports = passport;

// require('dotenv').config();
// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// //import google stuff
//
// module.exports = (passport) => {
//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.use(new GoogleStrategy({
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: "http://localhost:3001/auth/google/callback"
//         },
//         (token, refreshToken, profile, done) => {
//             return done(null, {
//                 profile: profile,
//                 token: token
//             });
//         }));
// };
//
// module.exports = passport;
