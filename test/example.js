/* global it */

var should = require('chai').should() // eslint-disable-line

var testString = 'this is a string'

it('testString should be a string', function () {
  testString.should.be.a('string')
})

it('testString should not be number', function () {
  testString.should.not.be.a('number')
})
