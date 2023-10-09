// В каком порядке выведутся log
// запустить функцию

(function run() {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 0);

  const myPromise = new Promise((resolve, reject) => {
    console.log(3);
    resolve(4);
  }).then((value) => {
    console.log(value);
    setTimeout(() => {
      console.log(5);
    }, 0);
  });

  console.log(6);
})();
