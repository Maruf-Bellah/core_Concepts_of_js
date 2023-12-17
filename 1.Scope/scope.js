// there are 3 kind of scope in js

// 1. global scope
// 2. locale scope
// 3. block scope



// 1.=========== global scope ===================
//This seems confusing, but if you understamd this, You are strong in hoisting
//this helps confusion b/w (gobal var, function's local var) & execution context

var a = 8; 
function A() {
    var a = 1;
    console.log(a);
    function B() {
        var b = 3;
        a = 77;
        console.log(a, b);
        function C() {
            var a = 99;
            b = 1;
            c = 98;
            console.log(a, b, c);
            
        }
        C();
        console.log(a,b,c);
    }
    B()
    console.log(`a is : ${a}`);
};
console.log(`initially 'a is : ${a}`);
// A()

// 2.============ locale scope ==================
// program showing local scope of a variable

// let a = "hello";
function greet() {
  let b = "world";
  console.log(a + " " + b);
}

// greet();


// 3. ============ block scope ==============

function fun() {
    let x = 10;
    console.log(x);
}
// console.log(x + 'hello'); // error
fun()


/*It's all about the type of following keywords 
depending upon specific condition.
'var' is function scope.
'let' and 'const' are block scope.
Function scope is within the function.
Block scope is within curly brackets.For example:*/
var age = 50;
var temp=age+10;
if (age > 40){	
    var age=temp;
    console.log(`Your brother ${age} years old than you!`);
 }

//Output: Your brother 60 years old than you!

// Note:But if we type console.log(age) outside the block scope than
// the previous value of 'age' with 'var' keyword has been vanished that is:

console.log(age);
// >60

// But in case of 'let' and 'const' keywords the previous value of
// 'var' in the previous example is not vanished here's an example:*/

var age = 50;
var temp=age+10;
if (age > 40){	
    let age=temp;
    console.log(`Your brother ${age} years old than you!`);
 }

// /*Output: Your brother 60 years old than you!
// Note: The output would still same but if we type 'console.log(age)' 
// outside the block scope than the previous value of 'age' with 'var' keyword
// has not been vanished that is:

console.log(age);
// >50