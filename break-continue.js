const numbers = [10,20,30,40,50,60,70,80,90];
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(numbers[i] > 30){
        console.log('Thank you');
    }
}


// ----------------------------------

const numbers = [1,-2,-3,-4,-5,6,7,8,9];
for(let i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    if(numbers [i] > 5){
      
        console.log('THANK YOU SO MUCH');
        break;
    }
    console.log(numbers[i]);
}


// ----------------------------------


const numbers = [1,-2,-3,-4,-5,6,7,8,9];

for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    if( numbers[i] < 0){
        continue;
    }
    console.log(numbers[i]);
}
