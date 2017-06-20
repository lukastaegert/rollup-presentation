const upperCaseLetterAt = (position, str) =>
  str.slice(0, position) +
  str[position].toUpperCase() +
  str.slice(position + 1)

export const makeFirstLetterUpperCase = str =>
  upperCaseLetterAt(0, str)

export const makeLastLetterUpperCase = str =>
  upperCaseLetterAt(str.length - 1, str)
