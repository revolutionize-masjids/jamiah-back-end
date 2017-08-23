import User from './../mongoose/models/user'
import passport from 'passport'
import FacebookStrategy from 'passport-facebook'

const FACEBOOK_APP_ID = '1857368264592327';
const FACEBOOK_APP_SECRET = '47b6848783ad87edc30328d2ec1b9359';



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8091/graphql",
    profileFields: ['id', 'emails', 'name']
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ 'facebookID': profile.id }, (err, user) => {
          if (err)
            return done(null, err);
          if (user) {
            console.log('authenticated!!!');
            return done(null, user);
          }
          //if user does not already exist create a new one
          else {
            //create a new user
        }
      });
  }
));
