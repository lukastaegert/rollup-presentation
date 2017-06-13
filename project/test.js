const makeUpper = require('.').makeUpper
const assert = require('assert')

assert.equal(makeUpper('hello MNUG'), 'Hello MNUG')
