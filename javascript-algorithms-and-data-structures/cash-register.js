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

    cid.forEach(function (x) {
      x[1] /= 100
    });
    after.forEach(function (x) {
      x[1] /= 100
    });
    cid.reverse();
    statement.change = after.reverse().filter(function (x) {
    return x[1] > 0
  });
  if (cid.every(function (x, k) {
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

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
