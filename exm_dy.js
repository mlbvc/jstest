let arr = [{
  value: 2,
  label: 'a'
},
{
  value: 4,
  label: 'b'
},
{
  value: 6,
  label: 'c'
}
]

function toRate(item) {
  let count = item.reduce((prev, next) => {
    return prev.value ? prev.value + next.value : prev + next.value
  })
  return item.map(i => {
    return {
      rate: `${((i.value / count) * 100).toFixed(2)}%`,
      ...i
    }
  })
}

const rate = toRate(arr)
console.log('第一题分布:', rate)


let numArr = [1, 2, 4, 3, 1, 2, 5, 6, 3]
function findDiff(arr) {
  let res = []
  arr.map(i => {
    if (!res.includes(i)) {
      res.push(i)
    }
  })
  return res
}
const diff = findDiff(numArr)
// 2 , 3, 5, 4, 1
console.log('第二题去重:', diff)


const array = [
  { id: 1, name: "child1", parentId: 0 },
  { id: 3, name: "child3", parentId: 1 },
  { id: 2, name: "child2", parentId: 1 },
  { id: 0, name: "parent0" },
  { id: 4, name: "child4", parentId: 3 },
  { id: 8, name: "child8", parentId: 0 },
  { id: 10, name: "parent10" },
  { id: 5, name: "child5", parentId: 2 },
  { id: 6, name: "child6", parentId: 1 },
  { id: 11, name: "child11", parentId: 10 },
  { id: 12, name: "child12", parentId: 10 },
  { id: 13, name: "child13", parentId: 8 },
  { id: 14, name: "child14", parentId: 0 }
];

/*
  转成
  
array = [
  {
    id: 0, name: "parent0", children: [
      {
        id: 1, name: "child1", parentId: 0, children: [
          {
            id: 3, name: "child3", parentId: 1, children: [

              { id: 4, name: "child4", parentId: 3 },
            ]
          },
          {
            id: 2, name: "child2", parentId: 1, children: [

              { id: 5, name: "child5", parentId: 2 },
            ]
          },
          { id: 6, name: "child6", parentId: 1 },
        ]
      },
      {
        id: 8, name: "child8", parentId: 0, children: [

          { id: 13, name: "child13", parentId: 8 },
        ]
      },
      { id: 14, name: "child14", parentId: 0 }
    ]
  },
  {
    id: 10, name: "parent10", children: [

      { id: 11, name: "child11", parentId: 10 },

      { id: 12, name: "child12", parentId: 10 },
    ]
  },
];

 */

let res = []

function tree(arr) {
  arr.map(item => {
    if (!item.parentId && item.parentId !== 0) {
      console.log(item)
      res.push({
        children: [],
        ...item
      })
    }
  })
  arr.map(item => {
    if (item.parentId || item.parentId === 0) {
      res.map(r => {
        if (r.id === item.parentId) {
          r.children.push(item)
        }
      })
    }
  })
  return res

}

const res3 = tree(array)
console.log('第三题转换', res3)


// 将数组转成树形结构的函数
function buildTree(array) {
  const result = [];
  const nodes = [];

  // 初始化每个节点，并保存到nodes数组中
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    item.children = []; // 初始化每个节点的children为空数组
    nodes[item.id] = item; // 以id为键保存节点
  }
  console.log(nodes)
  // 构建树结构
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item.parentId === 0) {
      result.push(item);  // 如果parentId为0，则是根节点，直接加入结果
    } else {
      const parent = nodes[item.parentId];
      if (parent) {
        parent.children.push(item);  // 否则，将当前节点作为parent的子节点添加
      }
    }
  }
  console.log(result)
  return result;
}

function buildTree2(array) {
  const map = new Map();
  
  // 先建立一个以id为键的映射，值是节点的对象，初始化children为空数组
  array.forEach(item => map.set(item.id, { ...item, children: [] }));

  const result = [];

  // 遍历原始数组，构建树形结构
  array.forEach(item => {
    if (item.parentId === 0) {
      result.push(map.get(item.id));  // 如果parentId为0，则是根节点，直接加入结果
    } else {
      const parent = map.get(item.parentId);
      if (parent) {
        parent.children.push(map.get(item.id));  // 否则，将当前节点作为parent的子节点添加
      }
    }
  });

  return result;
}

const newTree = buildTree(array);

//console.log('第三题chatgpt答案',JSON.stringify(newTree, null, 2));














let num = 12345678

function toRMB(num) {
  let arr = num.toString().split('')
  console.log(arr, arr.length)
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i)
    if (i % 3 === 0) {
      arr[i - 1] = ','
      i--
    }
  }
  console.log(arr.join(''))
  return arr.join('')
}


function toRMB2(num) {
  // 876,543,21
  // 12,345,678
  let arr = num.toString().split('').reverse()
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      newArr.push(',')
    }
    newArr.push(arr[i])
  }
  return newArr.reverse().join('')
}

//toRMB2(num)
console.log('第四题转rmb',toRMB2(12345678))