function add (a , b) {
    return a + b;
}

addme = add(4,5);
console.log(addme);


function printName(str1){
    console.log('Hello ' + str1 );
}
printName("Ankit");

let printGood = (someStr)=> "Hello " + someStr;
console.log(printGood("Neha"));