import { AES, enc } from 'crypto-js'

export const encrypt = (message, secretPassphrase) =>
  AES.encrypt(message, secretPassphrase).toString()

export const decrypt = (encryptedMessage, secretPassphrase) =>
  AES.decrypt(encryptedMessage, secretPassphrase).toString(enc.Utf8)
