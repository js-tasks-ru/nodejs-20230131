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

    // ctx.body = 'ok';
    const key = `isAdmin: false, amount: 100, id: id1`;

    await Session.create({
      key: key,
      user: user.id,
    });

    // key -> user
    
    // ctx.body = key;
    ctx.cookies.set('session', key);
    
    ctx.body = 'ok';

    // headers: { Authorization: key }

  })(ctx, next);
};