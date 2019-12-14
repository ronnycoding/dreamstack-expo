'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (const p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) {
              t[p] = s[p]
            }
          }
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
const react_1 = require('react')
const react_native_1 = require('react-native')
const prop_types_1 = require('prop-types')
const colors_1 = require('../../theme/colors')
const styles = react_native_1.StyleSheet.create({
  dotStyle: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
})
const dotColors = {
  active: colors_1.default.flatPurple.light,
  inactive: colors_1.default.flatWhite.dark,
}
const PinDot = function(_a) {
  const _b = _a.active
  const active = _b === void 0 ? false : _b
  return (
    <react_native_1.View
      style={__assign(__assign({}, styles.dotStyle), {
        backgroundColor: active ? dotColors.active : dotColors.inactive,
      })}
    />
  )
}
PinDot.propTypes = {
  active: prop_types_1.default.bool,
}
exports.default = PinDot
