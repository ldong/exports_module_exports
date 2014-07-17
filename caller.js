var rocker = require('./callee.js');
console.log(rocker);

// this will not work if module.exports is used in callee.js
rocker.name();
