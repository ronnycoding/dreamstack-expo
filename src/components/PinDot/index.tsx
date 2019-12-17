import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import colors from 'theme/colors'

const styles = StyleSheet.create({
  dotStyle: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
})

const dotColors = {
  active: colors.flatPurple.light,
  inactive: colors.flatWhite.dark,
}

const PinDot: React.FC<{ active: boolean }> = ({ active = false }) => {
  return (
    <View
      style={{
        ...styles.dotStyle,
        backgroundColor: active ? dotColors.active : dotColors.inactive,
      }}
    />
  )
}

PinDot.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default PinDot
