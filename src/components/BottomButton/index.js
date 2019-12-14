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
  touchableStyle: {
    position: 'absolute',
    bottom: 0,
    height: 64,
    width: '101%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: colors_1.default.flatWhite.light,
  },
})
const BottomButton = function(_a) {
  const title = _a.title
  const onPress = _a.onPress
  const _b = _a.disabled
  const disabled = _b === void 0 ? false : _b
  return (
    <react_native_1.TouchableOpacity
      disabled={disabled}
      style={__assign(__assign({}, styles.touchableStyle), {
        backgroundColor: disabled
          ? colors_1.default.flatWhite.dark
          : colors_1.default.flatBlack.dark,
      })}
      onPress={onPress}
    >
      <react_native_1.Text style={styles.textStyle}>
        {title}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  )
}
BottomButton.propTypes = {
  onPress: prop_types_1.default.func,
  title: prop_types_1.default.string,
  disabled: prop_types_1.default.bool,
}
exports.default = BottomButton
