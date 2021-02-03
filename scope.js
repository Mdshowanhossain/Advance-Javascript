function nums(first, second){
    let result = first + second;
    return result;
}
const output = nums(12, 8);
console.log(output);


// -------------

let bonus = 50;

function sum(first, second){
    let total = first + second + bonus;
    console.log(bonus);
    return total;
   
}
const output = sum(20, 30);
console.log(bonus);
console.log(output);

// ---------------

const bonus = 30;

function nums(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    if(result > 14){
        const mood = "HAPPY";
        console.log(mood);
    }
    return result;
}
const output = nums(12, 8);
console.log(bonus);
console.log(output);


