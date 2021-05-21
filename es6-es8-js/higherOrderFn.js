function multiplier(factor) {
    return x => x * factor;
}

let doubler = multiplier(2);
let quadrupler = multiplier(4);

console.log(doubler(4));
console.log(quadrupler(5));