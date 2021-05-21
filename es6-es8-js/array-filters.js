let vals = [4,57, 54, 2514,8];

// function isEven(num){
//     return (num % 2 == 0)
//     }

// vals = vals.filter(isEven);
// console.log(vals);

vals = vals.filter(num => !(num % 2 == 0));
console.log(vals);

// breaking a string into arrays then filter

let s = "I dont know  whats goin  on here";
let words = s.split(/\W+/).filter(word => word.length >=1);
console.log(words);