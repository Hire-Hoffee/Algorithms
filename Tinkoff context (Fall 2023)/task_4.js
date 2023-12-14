const readline = require("readline");

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

let result = 0;
let position = 0;
let banknotesStolenAmount = 0;
let banknotes = [];

rd.on("line", function (line) {
  lines.push(line.split(" "));
});

rd.on("close", function () {
  const amountDollars = Number(lines[0][0]);
  const denominationAmount = Number(lines[0][1]);
  const ExistingDenominations = lines[1];
  const allBanknotes = [];

  for (let i = 0; i < denominationAmount; i++) {
    allBanknotes.push(Number(ExistingDenominations[0]));
    allBanknotes.push(Number(ExistingDenominations[1]));
  }

  allBanknotes.sort();

  const sum = allBanknotes.reduce((currentSum, currentNumber) => {
    return currentSum + currentNumber;
  }, 0);

  if (sum < amountDollars) {
    return process.stdout.write(String("-1"));
  }

  while (true) {
    if (position === allBanknotes.length) {
      return process.stdout.write(String("-1"));
    }

    for (let i = position; i < allBanknotes.length; i++) {
      result += allBanknotes[i];
      banknotesStolenAmount += 1;
      banknotes.push(allBanknotes[i]);

      if (result > amountDollars) {
        position += 1;
        result = 0;
        banknotesStolenAmount = 0;
        banknotes = [];
        break;
      }

      if (result === amountDollars) {
        process.stdout.write(String(banknotesStolenAmount) + "\n");
        process.stdout.write(banknotes.join(" "));
        return;
      }
    }
  }
});
