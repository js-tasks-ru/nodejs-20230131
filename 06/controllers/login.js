const passport = require('../libs/passport');
const User = require('../models/User');
const Session = require('../models/Session');
const config = require('../config');
const { v4: uuidv4 } = require('uuid');
const logger = require('../logger');

module.exports.login = async function login(ctx, next) {  
  await passport.authenticate('local', async (err, user, info) => {
    
    if (err) {
      logger.error(ctx, err);

      throw err;
    }

    if (!user) {
      ctx.status = 400;
      ctx.body = { error: info }; // 'стратегия еще не подключена'
      return;
    }

    // const key = uuidv4(); // asdasd-1231-adasd-123123
    // Session.create({ token: key, user: user._id });

    // ctx.body = { token: key };

    // ctx.cookies.set('token', key);
    // ctx.body = 'ok';

  })(ctx, next);
};