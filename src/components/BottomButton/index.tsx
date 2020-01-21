import React from 'react'
import {
  GestureResponderEvent,
} from 'react-native'
import PropTypes from 'prop-types'
// @ts-ignore
import styled from '@emotion/native'
import { useTheme } from 'emotion-theming'

interface BottomButtonProps {
  title?: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

const BottomButton: React.FC<BottomButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  const { colors } = useTheme()
  
  const TouchableOpacity = styled.TouchableOpacity({
    position: 'absolute',
    bottom: 0,
    height: 64,
    width: '101%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  })

  const Text = styled.Text({
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    color: colors.flatWhite.light,
    textTransform: 'uppercase'
  })

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: disabled
          ? colors.flatWhite.dark
          : colors.flatBlack.dark,
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

BottomButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
}

export default BottomButton
