// Scoop function A() {
//   let a = 1;

//   function B() {
//     let b = 2;

//     function C() {
//       let c = 3;

//       console.log("func C:", a, b, c);
//     }

//     C();
//     console.log("func B:", a, b);
//   }
//   B();
//   console.log("func A:", a);
// }

// A();

// Замиканія function createCounter() {
//   let counter = 0;

//   function count() {
//     counter += 1;
//     return counter;
//   }
//   return count;
// }

// const increment = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log("increment", c1, c2, c3);

// const setTimer = (time) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, time);
//   });

//   return promise;
// };

// setTimer(2000)
//   .then((res) => {
//     console.log(res, "Hello world");
//   })
//   .then(() => {
//     console.log("Hello bitches");
//   });
