// 1 1 2 3 5 8 13 21...计算30位的值， 用递归

function Sum(prev, next, count) {
  let res = prev + next;
  count++;
  if (count >= 28) return res;
  return Sum(next, res, count);
}

Sum(1, 1, 0)