function telephoneCheck(str) {
  var regex = /^1?(\([0-9]{3}\)|[0-9]{3})-?[0-9]{3}-?[0-9]{4}$/;
  if (str.replace(/ /g, "").search(regex) != -1)
    return true
  return false;
}
