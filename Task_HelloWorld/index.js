// Print hello World
console.log("Hello World !!")
//Declare a variable i and set its value to 5
let i = 5
//Write the if else statement to console "Number is odd" if the value of i is odd and "Number is even" if the value of i is even.
if (i%2==0){
    console.log("Number is even")
}
else {
    console.log("Number is odd")
}
//Declare a string variable which is always constant and set is value to 'triangle'.
const string = 'triangle'

//Write a function 'findSide' which takes an argument 'type' and return the number of sides in that shape

function findSide(type){
     switch(type){
        case "Triangle": return 3;
        case " Square" : return 4;
        case 'Circle': return Infinity;
    }
}
const side = findSide('Circle');
console.log('Side', side);