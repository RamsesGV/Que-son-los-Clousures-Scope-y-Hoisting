const greeting = () => { 
    let userName = 'Ana';
    console.log(userName);

    userName === 'Ana' ? console.log(`Hello ${userName}`) : console.log('no es Ana');
}

greeting()
console.log(userName); // local sale error solo puedes usarla dentro de la funcion de manera local 
