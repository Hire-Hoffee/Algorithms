const readline = require("readline");

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rd.on("line", function (line) {
  lines.push(line);
});

rd.on("close", function () {
  let maxCredit = Number(lines[0].split(" ")[1]);
  const prodPrices = lines[1].split(" ").map(Number);
  let maxRemain = 0;

  while (maxCredit !== 0) {
    let remain = maxCredit;

    for (let price = 0; price < prodPrices.length; price++) {
      if (remain >= prodPrices[price]) {
        remain -= prodPrices[price];
      }
    }

    if (remain > maxRemain) {
      maxRemain = remain;
    }

    maxCredit--;
  }

  return process.stdout.write(maxRemain.toString());
});
