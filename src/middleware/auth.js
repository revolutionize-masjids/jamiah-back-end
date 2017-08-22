import User from './../mongoose/models/user'
import passport from 'passport'
import FacebookStrategy from 'passport-facebook'

const FACEBOOK_APP_ID = '1467346256687331';
const FACEBOOK_APP_SECRET = 'a37483fdc5c797987348545fe1bd8386';



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
          if (user)
            return done(null, user);
          //if user does not already exist create a new one
          else {
            try {

              let args = {
                  firstName: profile.name.givenName,
                  lastName: profile.name.familyName,
                  email: profile.emails[0].value,
                  facebookID: profile.id
              }

              // save the new user to the collection
              const newUser = await new User(args).save()

              // stringify the id for MongoDB purposes
              newUser.id = newUser.id.toString()

              // handle success
              console.log(`successfully saved user ${newUser.firstName} to the database collection`)

              return done(null, user);

            } catch (error) {
              // handle errors
              console.log('failed to save user', error)
              return done(null, error);
            }
        }
      });
  }
));








console.log('authenticated!!!!');
