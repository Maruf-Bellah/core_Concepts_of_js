// An IIFE (Immediately Invoked Function Expression) is a function
// that runs the moment it is invoked or called in the JavaScript event loop.

(function () {
  console.log("amar sonar bangla");
  let a = 63;
  let b = 52;
  console.log(a + b);
})();

// Immediately Invoked Function Expression

(() => console.log("Hello world brother"))();
(() => {
  let a = 10;
  let b = 20;
  console.log(a + b);
})();
