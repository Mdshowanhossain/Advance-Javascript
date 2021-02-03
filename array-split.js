const numbers = [2,3,4,5,6,7,8,9]
const part = numbers.slice(3, 6);
console.log(part);
 console.log(numbers);

// ---------------


const nums = [3,4,5,6,7,8,9,]
const part = nums.splice(1,5);
console.log(part);
console.log(nums);

// -----------------------

const numbers = [11,22,33,44,55,66,77,88,99]
const part = numbers.splice(1,6,1,3,5);
console.log(part);
console.log(numbers);

// ----------------------------


const numbers = [11,22,33,44,55,66,77,88,99]
const together =numbers.join(" roll ");
console.log(together);
console.log(numbers);