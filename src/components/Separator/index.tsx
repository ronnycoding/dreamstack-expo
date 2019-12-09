import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

interface SeparatorProps {
  marginVertical: number
}

const Separator: React.FC<SeparatorProps> = ({ marginVertical }) => {
  return <View style={{ marginVertical }} />
}

Separator.propTypes = {
  marginVertical: PropTypes.number,
}

Separator.defaultProps = {
  marginVertical: 5,
}

export default Separator
