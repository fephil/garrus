/* global $ */

var svg4everybody = require('svg4everybody')
var Holder = require('holderjs') //eslint-disable-line
var FastClick = require('fastclick')
// var sortBy = require('lodash/collection/sortBy')

FastClick.attach(document.body)

svg4everybody()

console.log('testing if jquery is loaded globally:')
console.log($)

require('./test')
