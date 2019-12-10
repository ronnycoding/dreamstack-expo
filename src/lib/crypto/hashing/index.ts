import { hash, compare } from 'bcrypt'
import { SALT_ROUNDS } from '../../../env'

export const hashWithSalt = (data) => hash(data, SALT_ROUNDS)
export const compareElements = (raw, encrypted) => compare(raw, encrypted)
