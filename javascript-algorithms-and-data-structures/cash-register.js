function checkCashRegister(price, cash, cid) {
  var after = cid.map(a => ([...a]));
  var amount = Math.round((cash - price) * 100) / 100;
  var unit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var statement = {status: "INSUFFICIENT_FUNDS", change: []}
  for (var i=8;i>=0;i--) {
      while (after[i][1] >= unit[i] && amount - unit[i] >= 0) {
        amount -= unit[i];
        after[i][1] -= unit[i];
      }
  }
  if (amount == 1) {
    for (var j=0;j<cid.length;j++) {
      after[j][1] = cid[j][1] - after[j][1]
    }
  }
  return 0.3 - 0.1;
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

console.log(checkCashRegister(19.7, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
