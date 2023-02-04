const numbers = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}
console.log(sumFor(numbers));

function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log(sumWhile(numbers));

function sumRecursion(nums) {
  const arr = nums;
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(arr.splice(1, arr.length));
}
console.log((sumRecursion(numbers)));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; });
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));

// 15:07
