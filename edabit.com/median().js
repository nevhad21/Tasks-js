"Basic Statistics: Median"
The median of a group of numbers is the middle number when the group is sorted.
If the size of the group is even, the median is the average of the middle two numbers. 
Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

function median(nums) {
  let result;
  if (nums.length % 2 === 0) {
    result = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  } else {
    result = nums[(nums.length - 1) / 2];
  }
  return result;
}
console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
console.log(median([2, 2, 6, 8, 8, 10, 10]));
console.log(median([1, 2, 2, 4, 7, 8, 9, 10]))