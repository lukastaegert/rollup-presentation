'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const upperCaseLetterAt = (position, str) =>
  str.slice(0, position) +
  str[position].toUpperCase() +
  str.slice(position + 1);

const makeFirstLetterUpperCase = str =>
  upperCaseLetterAt(0, str);

const makeUpper = str =>
  str && str.length ? makeFirstLetterUpperCase(str) : str;

exports.makeUpper = makeUpper;
