const fs = require('node:fs');

// V8 + libuv

// nexttick queue: [] nodejs
// =================================================================
// microtask queue: [] v8

// (macro)task queue: []

// console.log('start'); // 1

// new Promise((resolve, reject) => {
//   console.log('new Promise'); // 2
//   resolve();
// })
// .then(_ => {
//   console.log('then-1'); // 6
//   return new Promise(resolve => {
//     process.nextTick(() => {
//       console.log('nextTick-3'); // 7
//       resolve();
//     });
//   });
// })
// .then(_ => console.log('then-2')); // 8

// fs.open(__filename, () => {
//   console.log('fs.open'); // 10
//   queueMicrotask(_ => {
//     console.log('queueMicrotask-1'); // 11
//   });
// });

// process.nextTick(() => {
//   console.log('nextTick-1'); // 4
//   process.nextTick(() => console.log('nextTick-2')); // 5
// });

// console.log('end'); // 3


queueMicrotask(_ => {
  console.log('queueMicrotask-1'); // 3
  process.nextTick(() => console.log('nextTick-3')); // 5
});

queueMicrotask(_ => {
  console.log('queueMicrotask-2'); // 4
});

process.nextTick(() => {
  console.log('nextTick-1') // 1
  process.nextTick(() => console.log('nextTick-2')); // 2
});

