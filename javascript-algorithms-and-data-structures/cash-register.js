function checkCashRegister(price, cash, cid) {
  cid.forEach(x => x[1] = Math.round(x[1] * 100));
  var after = cid.map(x => ([...x]));
  var amount = cash * 100 - price * 100;
  var unit = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  for (var i=8;i>=0;i--) {
      while (after[i][1] >= unit[i] && amount - unit[i] >= 0) {
        amount -= unit[i];
        after[i][1] -= unit[i];
      }
  }
  if (amount != 0)
    return {status: "INSUFFICIENT_FUNDS", change: []};
  after.forEach((x, k) => {
    x[1] = cid[k][1] - x[1]
    x[1] /= 100
    cid[k][1] /= 100
  });
  if (cid.every((x, k) => x[1] == after[k][1]))
    return {status: "CLOSED", change: cid};
  else
    return {status: "OPEN", change: after.reverse().filter(x => x[1] > 0)};
}
