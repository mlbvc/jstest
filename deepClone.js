/* 
  弊端：不能序列化Date跟 null, 因为是Object的实例所以都变成了{}
*/
function deepClone (obj) {
  if (typeof obj !== 'object') {
    return obj
  }
  let res = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone(obj[key])
    }
  }
  return res
}

let o = {
  a: 1,
  b: 'str',
  c: true,
  d: function () {
    var x = 1
    return x
  },
  e: null,
  f: undefined,
  g: new Date(),
  h: {
    hh: {
      hhh: 'hhh'
    }
  },
  i: NaN,
  j: Infinity
}

let deepCloneObj = deepClone(o);

/* 
  JSON无法序列化函数, undefined, NaN ==> null, Infinity ==> null
*/
let jsonCloneObj = JSON.parse(JSON.stringify(o))
console.log('deepCloneObj', deepCloneObj)
console.log('jsonCloneObj', jsonCloneObj)