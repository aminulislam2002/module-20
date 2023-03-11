// Object
var student = { name: "Aminul", id: 115, class: "9-10" };
console.log(student); // return  { name: 'Aminul', id: 115, class: '9-10' }
student.id = 250;
console.log(student); // return { name: 'Aminul', id: 250, class: '9-10' }

var mobile = {
  brand: "Vivo",
  model: "Y33s",
  storage: 8 + 4 / 128,
  camera: "50MP+2MP+2MP",
  processor: "Octa-core",
  version: "Androide 12",
  color: "Golden",
  price: 23999,
};

console.log(mobile.price); // return 23999
console.log(mobile.processor); // return Octa-core

// Properties Example 01
var shopingCart = {
  pen: 12,
  paper: 20,
  mouse: 1,
  box: 2,
  a1: 5,
  a2: 5,
  a3: 5,
};

// when you know the spacific property name, use dot notation to get the property value
var penCount = shopingCart.pen;
console.log(penCount); // return 12
// alternative system
// when you know the spacific property name, use dot notation to get the property value
var penCount2 = shopingCart["paper"];
console.log(penCount2); // return 20
// when you know the spacific property name, use dot notation to get the property value
var propertieName = "mouse";
var propertiesValue = shopingCart[propertieName];
console.log(propertieName, propertiesValue); // return mouse 1

// set property value
// system 01
shopingCart.a1 = 15;
console.log(shopingCart);
// system 02
shopingCart["a2"] = 15;
console.log(shopingCart);
// system 03
var propertieNameA3 = "a3";
shopingCart[propertieNameA3] = 20;
console.log(shopingCart);

// get object property name
var properties = Object.keys(shopingCart);
console.log(properties); // return [ 'pen', 'paper', 'mouse', 'box' ]

// get object property value
var propertiesValues = Object.values(shopingCart);
console.log(propertiesValues); // return [ 12, 20, 1, 2 ]
