var shopingCart = {
  pen: 12,
  paper: 20,
  mouse: 1,
  box: 2,
  a1: 5,
  a2: 5,
  a3: 5,
};

var keys = Object.keys(shopingCart);
console.log(keys);
var value = Object.values(shopingCart);
console.log(value);

for (var i = 0; i < keys.length; i++) {
  var propertieName = keys[i];
  var propertiesValue = shopingCart[propertieName];
  //   console.log(propertieName ,propertiesValue);
}

// for in loop
for (var propertieName in shopingCart) {
  var value = shopingCart[propertieName];
  console.log(propertieName, value);
}
