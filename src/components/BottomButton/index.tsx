import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'
import PropTypes from 'prop-types'
import colors from 'theme/colors'

const styles = StyleSheet.create({
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
    color: colors.flatWhite.light,
  },
})

interface BottomButtonProps {
  title: string
  disabled: boolean
  onPress: (event: GestureResponderEvent) => void
}

const BottomButton: React.FC<BottomButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.touchableStyle,
        backgroundColor: disabled
          ? colors.flatWhite.dark
          : colors.flatBlack.dark,
      }}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BottomButton
