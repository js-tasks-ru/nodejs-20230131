const pug = require('pug'); // jade|handlebars|lodash.template

console.log(pug.renderFile('hello.pug', {
  name: {
    user: 'Ivan'
  },
  count: 10
}));

// React, Vue
// renderToString()


// const name = 'Andrew';

// const html = `
// <div>
//     <h1>Hello ${name}</h1>
//     <p>Thanks for the registration,</p>
//     <p>here is YOUR COUPON!</p>
// </div>
// `;