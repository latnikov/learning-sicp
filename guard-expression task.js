// функция на проверку палиндрома с использованием рекурсии 

const isPalindrome = (word) => {
  if (word.length < 2) {
    return true;
  }

  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.substring(1, word.length - 1));
  }
  return false;
};
