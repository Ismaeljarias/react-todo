var moment = require('moment');
console.log(moment().format());

var now = moment();

console.log('current timestap', now.unix());

var timestamp = 1469547278;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM, Do, YYYY @ h:mm A'));
