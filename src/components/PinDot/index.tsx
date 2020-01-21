import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
// @ts-ignore
import styled from '@emotion/native'

const PinDot: React.FC<{ active: boolean }> = ({ active = false }) => {
  const { colors } = useTheme()
  const dotColors = {
    active: colors.flatPurple.light,
    inactive: colors.flatWhite.dark,
  }

  const View = styled.View({
    width: 16,
    height: 16,
    borderRadius: 16,
  })

  return (
    <View
      style={{
        backgroundColor: active ? dotColors.active : dotColors.inactive,
      }}
    />
  )
}

PinDot.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default PinDot
