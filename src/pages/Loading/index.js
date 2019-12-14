'use strict'
exports.__esModule = true
const react_1 = require('react')
const react_native_1 = require('react-native')
const loadingStyles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
function Loading() {
  return (
    <react_native_1.View style={loadingStyles.container}>
      <react_native_1.ActivityIndicator size='large' />
      <react_native_1.Text>Loading</react_native_1.Text>
    </react_native_1.View>
  )
}
exports.default = Loading
