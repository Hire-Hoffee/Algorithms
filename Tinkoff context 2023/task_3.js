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
  const cartAmount = lines[0][0];
  const joeArr = lines[1];
  const winArr = lines[2];

  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < winArr.length; i++) {
    if (winArr[i] !== joeArr[i]) {
      startIndex = i;
      break;
    }
  }
  for (let i = winArr.length - 1; i > 0; i--) {
    if (winArr[i] !== joeArr[i]) {
      endIndex = i + 1;
      break;
    }
  }

  const sortArr = joeArr.slice(startIndex, endIndex).sort((a, b) => Number(a) - Number(b));
  const changedArr = [...joeArr];
  changedArr.splice(startIndex, sortArr.length, ...sortArr);

  return changedArr.join("") === winArr.join("")
    ? process.stdout.write("YES")
    : process.stdout.write("NO");
});
