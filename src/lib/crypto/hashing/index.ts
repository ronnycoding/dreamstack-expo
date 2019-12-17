import { SHA256, enc } from 'crypto-js'
import { SALT } from '../../../env'

export const hashWithSalt = (data) =>
  SHA256(`${data}${SALT}`).toString(enc.Utf8)

export const compareElements = (raw, hash) => {
  const hashed = hashWithSalt(raw)
  return hashed === hash
}
