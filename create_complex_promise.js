// Promises idependently defined
let cleanKitchen = function() {
  return new Promise(function(resolve, reject) {
    resolve('Kitchen is cleaned');
  });
};

let washDishes = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' dishes are washed');
  });
};

let getDinner = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' got Dinner');
  });
};

cleanKitchen().then(function(result){
  return washDishes(result);
}).then(function(result){
  return getDinner(result);
}).then(function(result){
  console.log('Finished: ' + result);
});