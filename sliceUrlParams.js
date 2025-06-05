let url = 'http://www.baidu.com?a=9&b=3';

let reg = /([^?=&]+)=([^?=&]+)/g;

let obj = {}, res = reg.exec(url);
while(res) {
  obj[res[1]] = res[2];
  res = reg.exec(url);
  console.log(res)
}

console.log(obj)