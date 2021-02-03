function friends(){
    let count = 0;
    return function(){
        count++;
        return count;
    }

    }

    const friends1 = friends();
console.log(friends1());
console.log(friends1());
console.log(friends1());
console.log(friends1());
console.log(friends1());
console.log(friends1());
console.log(friends1());
console.log(friends1());

// ........................

const friends2 = friends();
console.log(friends2());
console.log(friends2());
console.log(friends2());
console.log(friends2());
console.log(friends2());
console.log(friends2());
console.log(friends2());
console.log(friends1());


function stopwatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }

}
const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
