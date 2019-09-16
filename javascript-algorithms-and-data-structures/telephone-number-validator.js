function telephoneCheck(str) {
  var regex = /^1?(\([\d]{3}\)|[\d]{3})-?[\d]{3}-?[\d]{4}$/;
  if (str.replace(/ /g, "").search(regex) != -1)
    return true
  return false;
}
