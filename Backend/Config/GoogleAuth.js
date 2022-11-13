require('dotenv').config();
const passport = require("passport");
const jwt = require("jsonwebtoken")

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile)
    // const token = jwt.sign({userId:profile.emails[0].value},process.env.SECRET)
    cb(null,"user")

  }
));

module.exports=passport;
