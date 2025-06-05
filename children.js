let arr = [
  {
    id: 1,
    pid: 0,
    name: '广东'
  },
  {
    id: 2,
    pid: 0,
    name: '湖南'
  },
  {
    id: 3,
    pid: 1,
    name: '广州',
  },
  {
    id: 4,
    pid: 1,
    name: '深圳',
  },
  {
    id: 5,
    pid: 1,
    name: '汕尾',
  },
  {
    id: 6,
    pid: 2,
    name: '长沙',
  },
  {
    id: 7,
    pid: 2,
    name: '怀化',
  },
  {
    id: 8,
    pid: 5,
    name: '陆丰',
  },
  {
    id: 9,
    pid: 5,
    name: '海丰',
  },
]


const res = arr.reduce((prev, cur) => {
  console.log('prev', prev)
  console.log('cur', cur)
  // if (prev.length === 0) {
  //   return [cur]
  // }
  // if (cur.pid === 0) {
  //   return [prev, cur]
  // }
  // prev.forEach((v) => {
  //   if (v.id === cur.pid) {
  //     if (!v.children) v.children = [];
  //     v.children.push(cur)
  //   }
  // })
  // return prev
})
// const res = mapArr(arr, 'id', 'pid', 'chindren');
console.log(22, res)

function mapArr(params, id, pid, children) {
  const finalArr = [];
  let objWithId = {};
  for(let i = 0; i < params.length; i++) {
    const item = params[i];
    objWithId[item[id]] = item;
    obj2FindParent = objWithId[item[pid]];
    if (obj2FindParent) {
      if (!obj2FindParent[children]) {
        obj2FindParent[children] = [];
      }
      obj2FindParent[children].push(item);  
    } else {
      finalArr.push(item);
    }
  }
  return finalArr;
}