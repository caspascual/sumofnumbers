function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.pop() + sumRecursion(arr);
}

function sumTheSimpleWay(arr) {
  const sum = _.reduce(arr, function (memo, num) { return memo + num; });
  return sum;
}

const numbers = [1, 2, 3, 4, 5];

console.log(sumFor(numbers));
console.log(sumWhile(numbers));
console.log(sumRecursion(numbers));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
