/* eslint-disable new-cap */
import SHA256 from 'crypto-js/sha256'

export const hashElement = (data: string) => {
  return SHA256(data).toString()
}

export const compareElements = (left: string, rightHashed: string) => {
  const leftHashed = hashElement(left)
  return leftHashed === rightHashed
}
