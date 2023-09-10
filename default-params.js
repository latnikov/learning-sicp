function substr(str, startIndex = 0, length = str.length) {
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (startIndex >= str.length) {
    return '';
  }

  if (length < 0) {
    length = 1;
  }
  if (startIndex + length > str.length) {
    length = str.length - startIndex;
  }

  let result = '';
  for (let i = startIndex; i < startIndex + length; i += 1) {
    result += str[i];
  }

  return result;
}

export default substr;
