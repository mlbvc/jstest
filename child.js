function transData(a, idStr, pidStr, chindrenStr){  
  var r = [], hash = {}, id = idStr, pid = pidStr, children = chindrenStr, i = 0, j = 0, len = a.length;  
  for(; i < len; i++){  
      hash[a[i][id]] = a[i];  
  }
  console.log(hash)
  for(; j < len; j++){  
      var aVal = a[j], hashVP = hash[aVal[pid]];
      console.log(1, hashVP)
      if(hashVP){  
          !hashVP[children] && (hashVP[children] = []);  
          hashVP[children].push(aVal);  
      }else{  
          r.push(aVal);  
      }  
  }  
  return r;  
}  

var jsonData = eval('[{"id":"4","pid":"1","name":"大家电"},{"id":"5","pid":"1","name":"生活电器"},{"id":"1","pid":"0","name":"家用电器"},{"id":"2","pid":"0","name":"服饰"},{"id":"3","pid":"0","name":"化妆"},{"id":"7","pid":"4","name":"空调"},{"id":"8","pid":"4","name":"冰箱"},{"id":"9","pid":"4","name":"洗衣机"},{"id":"10","pid":"4","name":"热水器"},{"id":"11","pid":"3","name":"面部护理"},{"id":"12","pid":"3","name":"口腔护理"},{"id":"13","pid":"2","name":"男装"},{"id":"14","pid":"2","name":"女装"},{"id":"15","pid":"7","name":"海尔空调"},{"id":"16","pid":"7","name":"美的空调"},{"id":"19","pid":"5","name":"加湿器"},{"id":"20","pid":"5","name":"电熨斗"},{"id":"21","pid":"20","name":"电熨斗的儿子"}]');  


var jsonDataTree = transData(jsonData, 'id', 'pid', 'chindren');  
console.log(jsonDataTree)