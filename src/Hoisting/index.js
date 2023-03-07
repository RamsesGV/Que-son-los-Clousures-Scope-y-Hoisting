//var nameOfDog;// undefined
//console.log(nameOfDog)
//var nameOfDog = 'Elmo'
//console.log(nameOfDog);


var elmo; // undefined
nameOfDog(); // la funcion igual sube por eso funciona 
function nameOfDog() { 
    console.log(`el mejor perrito es ${elmo}`);
}

var elmo = 'elmito'

/*
El hoisting en JavaScript es un comportamiento en el cual las declaraciones de variables y funciones se mueven al principio del ámbito actual. En otras palabras, JavaScript levanta (hoist) las declaraciones de variables y funciones al inicio de su ámbito actual antes de que se ejecuten las instrucciones.

Por lo tanto, se pueden usar variables y funciones antes de declararlas en el código. Cuando una variable se declara con var, su declaración se eleva al inicio del ámbito y se inicializa a undefined. En el caso de las funciones, se eleva su declaración completa al inicio del ámbito, incluyendo su nombre, parámetros y cuerpo.

Es importante tener en cuenta que el hoisting solo eleva las declaraciones, no las asignaciones. Por lo tanto, si se intenta acceder a una variable que se ha declarado, pero no se ha asignado ningún valor, se devolverá undefined.

Es buena práctica declarar todas las variables y funciones al inicio de su ámbito para evitar problemas con el hoisting y para tener un código más legible y fácil de mantener.




*/