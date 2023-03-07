const fruits = () => { 
if (true) { 
    var fruit1 = 'Apple' //function scope o scope global
    let fruit2 = 'kiwi' // block scope
    const fruit3 = 'banana' // block scope
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}

fruits();