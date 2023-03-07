// variables

var a; // declarando 
var b = 'b'; //declaramos / asignamos 
b = 'bb'; //reasignacion
var a = 'aa';// redeclaracion

//Global SCOPE 

var fruit = 'Apple';  //global
console.log(fruit);

const bestFruit = () =>  { 
    console.log(fruit)
}

bestFruit();


const countries = () => { 
    country = 'Colombia';  // global por que no esta declarada con var let o const! 
    console.log(country);
}

countries()
console.log(country);