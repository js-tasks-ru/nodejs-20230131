const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');

module.exports = new LocalStrategy(
  {
    usernameField: 'email', 
    session: false
  },
  async function(email, password, done) {
    // done(err) -> no db connection
    // done(null, user) -> success
    // done(null, null, "wrong password") -> failed
    
    console.log(email, password);

    return done(null, null, 'стратегия еще не настроена');
  }
);
