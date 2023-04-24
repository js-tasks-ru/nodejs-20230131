const pug = require('pug'); // jade|handlebars|lodash.template

console.log(pug.renderFile('sigin.pug', {
  user: {
    name: 'Ivan',
    age: 14,
  },
  count: 10,
  pretty: true,
}));
