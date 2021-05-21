// const uses less memory and make your program run superfast
const a = 4;

let b = 5;

console.log(a+b);

const particle = {
    "a" : "pluto",
    "b" : "mercury"
}

console.log(particle);

particle.c = "Jupiter"; 

console.log(particle);
// this doesn't mean we cannot modify a constant object, we can!

// if a is never changes make it to const

// const a = 7; // const a = 7;
// ^

// SyntaxError: Identifier 'a' has already been declared