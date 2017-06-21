import { makeFirstLetterUpperCase } from './uppercase'

export const makeUpper = str =>
  str && str.length ? makeFirstLetterUpperCase(str) : str
