import React from 'react'
import { View } from 'react-native'

interface SeparatorProps {
  marginVertical: number
}

const Separator: React.FC<SeparatorProps> = ({ marginVertical }) => {
  return <View style={{ marginVertical }} />
}

Separator.defaultProps = {
  marginVertical: 5,
}

export default Separator
