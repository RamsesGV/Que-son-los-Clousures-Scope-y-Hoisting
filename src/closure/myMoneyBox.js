

function sumar  (x)  { 
    
   return function(y) {
    return x + y
   }
    }
const sumar5 = sumar(5)
console.log(sumar5(3));
console.log(sumar5(20));
// Funciona

/***************************************************************** */

const sumarArrow = x => y => x + y;

const sumarArrow5 = sumarArrow(5)

console.log(sumarArrow5(5));
//FUNCIONA
/*********************************************************************** */

function moneyBox(coins) { 
    let saveCoins = 0
    saveCoins += coins
    console.log(`Money box $ ${saveCoins}`)
}
moneyBox(5);
moneyBox(5);
//NO SUMA EL VALOR SIEMPRE SERA 5 NO TIENE CLOSURE

/************************************************************** */

function CajaDeDinero () { 
    let dineroAhorrado = 0
     function DineroNuevo (dinero) { 
        dineroAhorrado += dinero
        console.log(`Caja de dinero $ ${dineroAhorrado}`);
    }
    return DineroNuevo
}

const miDinero = CajaDeDinero();
miDinero(5)
miDinero(5)
miDinero(15)

//EJEMPLO PERFECTO DEL CLOSURE BIEN IMPLEMENTADO 

/************************************************ */

 function createPetList() {
    
    let listaMascotas = [] 
    return function agregarMascota(mascota) { 
      if (mascota) { 
        listaMascotas.push(mascota)
      }
      return listaMascotas
    }
  }
// en este ejemplo de closure se utiliza el return antes de la function 
// agregarMascora para devolver el valor actualizado cada que 
//agregamos un nuevo valor. 
//funciona perfectamente 
const agregarUnaMascota = createPetList();
agregarUnaMascota('perro')
agregarUnaMascota('gato')
agregarUnaMascota('kata')

const listaActualizada = agregarUnaMascota(); 
console.log(listaActualizada);