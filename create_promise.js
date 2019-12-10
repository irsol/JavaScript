let promiseToCleanTheKitchen = new Promise(function(resolve, reject){

  //cleaning the kitchen

  let isClean = true;
  
  if(isClean){
    resolve('Clean');
  } else {
    reject('not Clean');
  }
});

promiseToCleanTheKitchen.then(function(fromResolve){
  console.log('the kitchen is ' + fromResolve);
}).catch(function(fromReject){
  console.log('the kitchen is ' + fromReject);
});