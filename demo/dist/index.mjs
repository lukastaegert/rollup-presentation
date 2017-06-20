var upperCaseLetterAt = function upperCaseLetterAt(position, str) {
  return str.slice(0, position) + str[position].toUpperCase() + str.slice(position + 1);
};

var makeFirstLetterUpperCase = function makeFirstLetterUpperCase(str) {
  return upperCaseLetterAt(0, str);
};

var makeUpper = function makeUpper(str) {
  return str && str.length ? makeFirstLetterUpperCase(str) : str;
};

export { makeUpper };
