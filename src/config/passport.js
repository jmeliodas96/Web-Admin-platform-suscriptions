const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// model
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField:'email'
}, async (email, password, done) => {
    const user = await User.findOne({email:email});
    console.log(user);
    if(!user){
        // null > no errors, false > not user found, message > message
        return done(null, false, {message:'Usuario no encontrado'});
    } else {
        console.log(password);
        const match = await user.matchPassword(password);
        if(match){
            // callback
            return done(null, user);
        } else {
            return done(null, false, {message:'Contraseña no valida'});
        }
    }
}));

// store session
passport.serializeUser((user, done) => {
    // return callback
    done(null, user.id);
});

// user is found
passport.deserializeUser((id, done) => {
    User.findById(id, (err, done) => {
        done(err, user);
    });
})