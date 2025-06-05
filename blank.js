const obj = { a: 1}

const res = Reflect.ownKeys(obj)
console.log(res)

const s = new Set([1, 2])
const ws = new WeakSet()
const m = new Map({a: 1})
const wm = new WeakMap({a: 1})

ws.add({a: 1})
console.log('set', s)
console.log('weakset', ws)
console.log('map', m)
console.log('weakmap', wm)
