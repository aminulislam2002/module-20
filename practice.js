// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function namta(ghore) {
  for (var i = 1; i <= 10; i++) {
    var result = ghore * i;
    console.log(result);
  }
}
var ghore = 13;
namta(ghore);

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

function fullName(fName, lName) {
  return fName + lName;
}
var fName = "Aminul ";
var lName = "Isalm";
var result03 = fullName(fName, lName);
console.log(result03);

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

function square(num) {
  return num * num;
}
var result04 = square(5);
console.log(result04);

// Write a function called foo() which prints "foo" and function called bar() which prints "bar". call funtioin bar() in the foo() function after printing. What will be output? Now call the foo() to see output.

// Write a function called make_avg() which will take an there integers and return the avarage of those values

function make_avg(a, b, c) {
  var totalAvg = a + b + c;
  return totalAvg / 3;
}
var a = 100;
var b = 150;
var c = 50;
var result06 = make_avg(a, b, c);
console.log(result06);

// Write a funtion call make_avg() which will take an array off integers and the size off that array and return of the avarage of those value.
