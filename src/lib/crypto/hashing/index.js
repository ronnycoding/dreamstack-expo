'use strict'
exports.__esModule = true
const bcrypt_1 = require('bcrypt')
const env_1 = require('../../../env')
exports.hashWithSalt = function(data) {
  return bcrypt_1.hash(data, env_1.SALT_ROUNDS)
}
exports.compareElements = function(raw, encrypted) {
  return bcrypt_1.compare(raw, encrypted)
}
