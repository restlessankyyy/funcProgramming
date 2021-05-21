function add (a , b) {
    return a + b;
}

addme = add(4,5);
console.log(addme);

let addFn = (n,m) => n + m;
console.log(addFn(4,4577));


function printName(str1){
    console.log('Hello ' + str1 );
}
printName("Ankit");

let printGood = (someStr)=> "Hello " + someStr;
console.log(printGood("Neha"));