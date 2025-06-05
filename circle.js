
// 判断是否有引用
function hasCircularReference(obj) {
  const seenObjects = new WeakSet();
  
  function detect(obj) {
    if (obj === null || typeof obj !== 'object') {
      return false;
    }
    
    if (seenObjects.has(obj)) {
      return true;
    }
    
    seenObjects.add(obj);
    
    // 检查普通属性
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (detect(obj[key])) {
          return true;
        }
      }
    }
    
    // 显式检查Symbol属性
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    for (const sym of symbolKeys) {
      if (detect(obj[sym])) {
        return true;
      }
    }
    
    // 检查数组、Map、Set等（同上）
    // ...
    
    return false;
  }
  
  return detect(obj);
}