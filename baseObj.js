let name = '全局name'
let obj = {
  name: '哈哈',
  showName: function() {
    console.log('line 1', this.name)// 笑啥，因为name改变了
  }
}

let childObj = obj

childObj.name = '笑啥'

console.log('line 2', childObj.name) // 笑啥

console.log('line 3', obj.showName()) // undefine

let obj2 = {
  name: '嘻嘻',
  showName: function() {
    return this.name
  }
}

console.log('line 4', obj2.showName()) // 嘻嘻
