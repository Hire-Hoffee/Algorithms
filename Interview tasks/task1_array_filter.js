// Задачи:
// -Отфильтровать данный массив по active true
// -Отсортировать по sort
// -Оставить в name только латинские буквы
// -распределить массив на два по признаку type

const data = [
  { name: "testa1", active: true, sort: 1, type: "prod" },
  { name: "te11stb2", active: true, sort: 2, type: "dev" },
  { name: "tфыestc3", active: false, sort: 11, type: "prod" },
  { name: "tes!!23td4", active: true, sort: 22, type: "dev" },
  { name: "33teste5", active: true, sort: 3, type: "prod" },
  { name: "1testy6", active: false, sort: 14, type: "dev" },
  { name: "testj7", active: true, sort: 0, type: "dev" },
  { name: "t34estg8", active: false, sort: 1, type: "prod" },
];

// Решение №1
const dataOut1 = data.reduce(
  (acc, curr) => {
    if (!curr.active) {
      return acc;
    }

    curr.name = curr.name.replace(/[^A-Za-z]/gim, "");
    acc[curr.type].push(curr);

    return acc;
  },
  { prod: [], dev: [] }
);
dataOut1.dev.sort((a, b) => a.sort - b.sort);
dataOut1.prod.sort((a, b) => a.sort - b.sort);

// Решение №2
const dataOut2 = { prod: [], dev: [] };

data.forEach((el) => {
  if (!el.active) {
    return;
  }

  el.name = el.name.replace(/[^A-Za-z]/gim, "");
  dataOut2[el.type].push(el);
});

dataOut2.dev.sort((a, b) => a.sort - b.sort);
dataOut2.prod.sort((a, b) => a.sort - b.sort);

// Решение №3
const dataOut3 = { prod: [], dev: [] };

let changedData = data.filter((el) => el.active);

changedData.sort((a, b) => a.sort - b.sort);

changedData = changedData.map((el) => {
  el.name = el.name.replace(/[^A-Za-z]/gim, "");
  return el;
});

changedData.forEach((el) => {
  dataOut3[el.type].push(el);
});

console.log(dataOut1);
console.log(dataOut2);
console.log(dataOut3);
