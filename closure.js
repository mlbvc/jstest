// 5 5 5 5 5
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('var', i);
  }, 1000)
}

/* 
  for 0
  for 1
  for 2
  for 3
  for 4
  5 * setime var 5
*/
for(var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('setime var', i);
  }, 1000)
  console.log('for', +i)
}

// 1 2 3 4 5
for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('let', i);
  }, 1000)
}

// 1 2 3 4 5
for(var i = 0; i < 5; i++) {
  (function(i){
    setTimeout(() => {
      console.log('closure var', i);
    }, 1000)
  })(i)
}