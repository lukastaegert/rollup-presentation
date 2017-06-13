const upperCaseLetterAt = (position, str) =>
  str[position] = str[position].toUpperCase()

export const makeFirstLetterUpperCase = str =>
  upperCaseLetterAt(0, str)

export const makeLastLetterUpperCase = str =>
  upperCaseLetterAt(str.length - 1, str)
