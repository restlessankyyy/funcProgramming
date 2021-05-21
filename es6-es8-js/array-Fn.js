
let vals = [1, 2, 3, 7];
console.log(vals);

// using arrays.map()
vals = vals.map(x =>x+=2);
console.log(vals);


// using arrays.fill()

// console.log(vals.fill(0) );
randomArray = Array(100).fill(1).map(Math.random);
console.log(randomArray);

// Adding the objects in an array
// for (let r of randomArray){
//     var sum=0;
//     sum += r;
// }


function addArray(A){
    let sum= 0;
    sum = A.reduce((acc, val) => acc + val);
    return sum;
}

let f = addArray([0.54, 5, 10]);
console.log(f);

//finding  array max using reduce


function findMax(B){
    let biggest = B.reduce((a,b) => b > a ? b :a );
    return biggest;
}

let biggerNumber = findMax([1,2,4,5]);
console.log(biggerNumber);








 
