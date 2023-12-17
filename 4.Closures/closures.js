// A closure gives you access to an outer function’s scope from an inner function

// A closure is a function having access to the parent scope, even after the parent function has closed.



function init() {
    let name = "Maruf Bellah";
    function displayName() {
       console.log(name);
    }
    displayName()
}
init();

function foo() {
    let b = 14;
    let c = 54;
    let sum = b + c;
    function inner() {
        console.log(sum);
    }
    return inner;
}
let newFun = foo();
newFun()
