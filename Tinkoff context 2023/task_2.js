const readline = require("readline");

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
let resultCount = 0;

rd.on("line", function (line) {
  lines.push(line.split(""));
});

rd.on("close", function () {
  const letters = lines[0];
  const sheriffArr = ["s", "h", "e", "r", "i", "f", "f"];

  while (true) {
    for (let i = 0; i < sheriffArr.length; i++) {
      if (letters.indexOf(sheriffArr[i]) === -1) {
        return process.stdout.write(resultCount.toString());
      }
      if (letters.indexOf(sheriffArr[i]) !== -1) {
        let index = letters.indexOf(sheriffArr[i]);
        letters.splice(index, 1);
      }
    }
    resultCount++;
  }
});

// thegorillaiswatching
// rifftratatashe
// fheriherffazfszkisrrs
