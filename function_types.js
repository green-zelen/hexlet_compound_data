// function car(pair) {

// //   return pair(x) {
// //     return x;
// //   }
// }


const cons = (x, y) => (f) => f(x, y);
function cons(x, y) {
    return function (f) {
        return f(x, y);
    }
 }


 export const car = pair => pair(x => x);





function car(pair) {
    return pair(function(x){
        return x
    });
} 
function cdr(pair) {
    return pair(function(x, y){
        return y;
    });
}
__________

function car(pair) {
    return pair((x) => x);
} 
function cdr(pair) {
    return pair((x, y) => {
        return y;
    });
}
____________

function foo(x) {} //function declaration
const foo1 = (x) => {}
const foo2 = function(x) {} //function expression
const ar1 = (y) => {}
const ar2 = y => {}




const ar3 = y => y;
const ar4 = () => {}
const arg5 = (n, m) => {}
const arg6 = t => t * 2;

__________

pair(x => x, 3, 'кря', {}, [], function(x){return x})
pair()
