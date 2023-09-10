export default (str) => {
  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (currentIndex, acc) => {
    if (currentIndex > lastIndex) {
      return acc;
    }
    return iter(currentIndex + 1, `${str[currentIndex]}${acc}`);
  };
  // END
  return iter(0, '');
};