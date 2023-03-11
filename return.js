function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  return sum;
}
var total = add(80, 20); 
console.log("Total: ", total);

// Example 02
function chocolataeBuy(money) {
  var chocolataePrice = 10;
  var quantity = money / chocolataePrice;
  return quantity;
}
var myMoney = 500;
var chocolate = chocolataeBuy(myMoney);
console.log("Ami total", chocolate, "ti chocolate kinlam");
