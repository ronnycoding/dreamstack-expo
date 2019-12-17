import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

interface SeparatorProps {
  marginVertical: number
}

const Separator: React.FC<SeparatorProps> = ({ marginVertical = 5 }) => {
  return <View style={{ marginVertical }} />
}

Separator.propTypes = {
  marginVertical: PropTypes.number.isRequired,
}

export default Separator
