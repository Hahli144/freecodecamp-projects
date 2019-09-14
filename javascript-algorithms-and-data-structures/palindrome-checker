function palindrome(str) {
  str = str.toLowerCase().match(/[a-z0-9]/g);
  for (var i=0, j=str.length-1; i<str.length/2;i++) {
    if (str[i] != str[j - i])
      return false;
  }
  return true;
}
