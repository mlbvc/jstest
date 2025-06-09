// 2 4 6 3 1
function event1() {
  setTimeout(() => {
    console.log(1)
  }, 0)

  new Promise((resolve, reject) => {
    console.log(2)
    resolve(3)
    console.log(4)
    reject(5)
  }).then(res => {
    console.log(res)
  })
  console.log(6)
}

// 1 3 2 5 0 4
function event2() {
  setTimeout(() => {
    console.log(0)
  }, 0)

  new Promise((resolve, reject) => {
    console.log(1)
    for (let i = 0; i < 100; i++) {
      i === 99 && resolve(2)
    }
    console.log(3)
  }).then(res => {
    console.log(res)
    setTimeout(() => {
      console.log(4)
    }, 0)
    console.log(5)
  })
}

// 0 5 3 4 0.1,    1 1.2 1.1  2 2.2 2.1
function event3() {
  async function A() {
    console.log(0)
    // 这里await 所以不是 0 0.1
    await Promise.resolve()
    console.log(0.1)
  }

  setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
      console.log(1.1)
    })
    console.log(1.2)
  }, 0)

  setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
      console.log(2.1)
    })
    console.log(2.2)
  }, 0)

  Promise.resolve().then(() => {
    console.log(3)
  })

  Promise.resolve().then(() => {
    console.log(4)
  })

  A()
  console.log(5)
}

// // 0 0.1 5 3 4 ,    1 1.2 1.1  2 2.2 2.1
// 这里没有await所以 直接执行
function event4() {
  function A() {
    console.log(0)
    Promise.resolve()
    console.log(0.1)
  }

  setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
      console.log(1)
    })
    Promise.reject().catch(() => {
      console.log(1.1)
    })
    console.log(1.2)
  }, 0)

  setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => {
      console.log(2.1)
    })
    console.log(2.2)
  }, 0)

  Promise.resolve().then(() => {
    console.log(3)
  })

  Promise.reject().catch(() => {
    console.log(4)
  })
  A()
  console.log(5)
}


// 我的答案：同步任务1——同步任务3——同步任务2——Promise中的同步任务——Promise中回调的异步微任务
//          定时器中的宏任务——同步任务2——mac——Promise中的同步任务——Promise中回调的异步微任务
//          ——定时器中的定时器（宏任务）


// 纠错：async肯定比同步三先执行！！！

//同步任务1

//VM142:4 同步任务2
//VM142:9 Promise中的同步任务
//VM142:26 同步任务3
//VM142:24 Promise中回调的异步微任务
//undefined
//VM142:14 定时器中的宏任务
//VM142:4 同步任务2
//VM142:6 mac
//VM142:9 Promise中的同步任务
//VM142:20 定时器中的: Promise中回调的异步微任务
//VM142:16 定时器中的定时器（宏任务）

function event5() {
  console.log("同步任务1");
  function async(mac) {
    console.log("同步任务2");
    if (mac) {
      console.log(mac);
    }
    return new Promise((resolve, reject) => {
      console.log("Promise中的同步任务");
      resolve("Promise中回调的异步微任务")
    })
  }
  setTimeout(() => {
    console.log("定时器中的宏任务");
    setTimeout(() => {
      console.log("定时器中的定时器（宏任务）");

    }, 0)
    async("mac").then(res => {
      console.log('定时器中的:', res);
    })
  }, 0)
  async().then(res => {
    console.log(res);
  })
  console.log("同步任务3")
}

