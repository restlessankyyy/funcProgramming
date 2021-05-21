// var is a function scopes and let/ const are block scoped

function setUp(A){
    var i =0;
    for(i =0; i < A.length; i++){
        console.log("Go Bite");
    }
    console.log(i);
}


setUp(A = [1, 2, 3]);


function setUp(A){
    let i =0;
    for(i =0; i < A.length; i++){
        console.log("Go Bite");
    }
    console.log(i);
}   

console.log(i); // ReferenceError: i is not defined .. due to block scoped


setUp(A = [1, 2, 3]);
