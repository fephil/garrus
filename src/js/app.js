/* global $ */

var Holder = require('holderjs') //eslint-disable-line
var FastClick = require('fastclick')
// var sortBy = require('lodash/collection/sortBy')

FastClick.attach(document.body)

console.log('testing if jquery is loaded globally:')
console.log($)

require('./test')
