const readline = require("readline");

const rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rd.on("line", function (line) {
  if (Number.isNaN(Number(line))) {
    lines.push(line);
  }
});

rd.on("close", function () {
  const WORD = "TINKOFF";

  for (let i = 0; i < lines.length; i++) {
    const suggestion = lines[i];

    if (suggestion.length !== WORD.length) {
      process.stdout.write("No\n");
      continue;
    }

    for (let j = 0; j < suggestion.length; j++) {
      if (!WORD.includes(suggestion[j])) {
        process.stdout.write("No\n");
        break;
      }

      if (j === suggestion.length - 1) {
        process.stdout.write("Yes\n");
      }
    }
  }
});
