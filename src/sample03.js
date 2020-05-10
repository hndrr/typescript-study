"use strict";
function sum(a, b) {
    return a * b;
}
//allow_function
var sum2 = function (a, b) { return a * b; };
var answer = sum2(6, 2);
console.log(answer);
