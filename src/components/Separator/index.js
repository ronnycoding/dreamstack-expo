'use strict'
exports.__esModule = true
const react_1 = require('react')
const react_native_1 = require('react-native')
const prop_types_1 = require('prop-types')
const Separator = function(_a) {
  const marginVertical = _a.marginVertical
  return <react_native_1.View style={{ marginVertical: marginVertical }} />
}
Separator.propTypes = {
  marginVertical: prop_types_1.default.number,
}
Separator.defaultProps = {
  marginVertical: 5,
}
exports.default = Separator
