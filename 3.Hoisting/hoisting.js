// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
// (to the top of the current script or the current function).

function cowSays(sound) {
  console.log(sound);
}
cowSays("moooo");

cowSays1("moooo1");

function cowSays1(sound) {
  console.log(sound);
}


var a;
console.log(a);
a = 'Bangladesh';
console.log(a);
 
// a = 5;
// console.log(a);
// let a;
// console.log(a);



let LANGUAGE = 'JAVA';
let language = 'Javascript';

function getLanguage() {
    if (!language) {
        let language = LANGUAGE;
    }
    return language;
};

console.log(`I love ${getLanguage()}`)