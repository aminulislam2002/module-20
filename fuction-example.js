/* 
function functionName(Parameters) {
    function body 
    return
}
var returnValue = functionName(Parameters value)
 */

// Example 01
function getAvarage(assigment01, assigment02, assigment03) {
  var total = assigment01 + assigment02 + assigment03;
  var avarage = total / 3;
  return avarage;
}
var assigment01Marks = 58;
var assigment02Marks = 58;
var assigment03Marks = 58;

var myAvarage = getAvarage(assigment01Marks, assigment02Marks, assigment03Marks);
console.log(myAvarage);

// Example 02
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
var result01 = add(12, 13);
var result02 = add(45, 7);
var result03 = add(result01, result02);
console.log(result03);
