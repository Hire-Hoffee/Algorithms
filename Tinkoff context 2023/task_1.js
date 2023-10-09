const readline = require("readline");

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rd.on("line", function (line) {
  lines.push(line.split(" "));
});

rd.on("close", function () {
  const gunsCount = Number(lines[0][0]);
  const money = Number(lines[0][1]);
  const gunsPrices = lines[1];

  const sortedPrices = gunsPrices.sort((a, b) => Number(a) - Number(b));

  for (let i = 0; i < sortedPrices.length; i++) {
    if (Number(sortedPrices[0]) > money) {
      return process.stdout.write(String(0));
    }
    if (Number(sortedPrices[i]) > money) {
      return process.stdout.write(sortedPrices[i - 1].toString());
    }
  }
});
