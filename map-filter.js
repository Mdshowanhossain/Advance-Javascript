const numbers = [3,4,5,6,7,8,9];
const output = []
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const doubleIt = element * element;
    output.push(doubleIt);   
}

console.log(output);



const numbers = [4,5,6,7,8,9];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const total =element * element;
     output.push(total);
}
console.log(output);



const numbers = [10,20,30,40,50];
function square (element){
    return element * element;
}
numbers.map(function(element,index,Array){
    console.log(element,index,Array);
})




const numbers = [3,4,5,6,7,8,9];
function square(element){
    return element * element;
}
numbers.map(function(element,index,Array){
    console.log(element,index,Array);
})



// METHOD 2




const numbers = [3,4,5,6,7,8,9];

const result = numbers.map (function square(element){
    return element * element;    
})
console.log(result);

// METHOD 3

const numbers = [3,4,5,6,7,8,9];

const result = numbers.map(x => x * x);
console.log(result);

// _______________________

const numbers = [5,6,7,8,9];
const result = numbers.map(x=> x * x);
console.log(result);

// ______________________________ FILTER.

// 1.

const numbers = [2,3,4,5,6,7,8,9];
const smaller = numbers.filter(x => x < 5)
console.log(smaller);

// 2.

const numbers = [2,3,4,5,6,7,8,9];
const bigger = numbers.filter(x=> x>5);
console.log(bigger);


// _____________IsThere

const numbers = [2,3,4,5,6,7,8,9];
const IsThere = numbers.find(x => x > 5);
console.log(IsThere);