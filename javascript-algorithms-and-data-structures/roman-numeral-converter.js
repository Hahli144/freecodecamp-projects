function convertToRoman(num) {
  var romanSym = ["I","X","C","M","V","L","D"];
  var romanNum = [];
  num = num.toString().split("").reverse();
  for (var i=0;i<num.length;i++) {
    if (num[i] < 4)
      romanNum.push(romanSym[i].repeat(num[i]));
    else if (num[i] < 6)
      romanNum.push(romanSym[i].repeat(5 - num[i]) + romanSym[i + 4]);
    else if (num[i] < 9)
      romanNum.push(romanSym[i + 4] + romanSym[i].repeat(num[i] - 5));
    else if (num[i] == 9)
      romanNum.push(romanSym[i] + romanSym[i + 1]);
  }
  return romanNum.reverse().join("");
}
