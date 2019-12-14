'use strict'
exports.__esModule = true
const react_1 = require('react')
const react_native_1 = require('react-native')
const homeStyles = react_native_1.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
function Home() {
  return (
    <react_native_1.View style={homeStyles.container}>
      <react_native_1.Text>Home</react_native_1.Text>
    </react_native_1.View>
  )
}
exports.default = Home
