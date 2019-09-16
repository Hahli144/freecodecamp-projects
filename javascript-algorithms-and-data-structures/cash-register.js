  function checkCashRegister(price, cash, cid) {
  cid.forEach(function (x) {
    x[1] = Math.round(x[1] * 100);
  });
  var after = cid.map(x => ([...x]));
  var amount = Math.round(cash * 100 - price * 100);
  var unit = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var statement = {status: "INSUFFICIENT_FUNDS", change: []}
  for (var i=8;i>=0;i--) {
      while (after[i][1] >= unit[i] && amount - unit[i] >= 0) {
        amount -= unit[i];
        after[i][1] -= unit[i];
      }
  }
  if (amount == 0) {
    for (var j=0;j<cid.length;j++) {
      after[j][1] = cid[j][1] - after[j][1]
    }
    cid.forEach(function (x, k) {
      x[1] /= 100
      after[k][1] /= 100
    });
    statement.change = after.reverse().filter(function (x) {
      return x[1] > 0
    });
    if (cid.reverse().every(function (x, k) {
      return x[1] == after[k][1]
    })) {
      statement.status = "CLOSED";
      statement.change = cid.reverse();
    }
    else
      statement.status = "OPEN"
  }
  return statement;
}
