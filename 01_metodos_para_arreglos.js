/**
 * Un array en JS, es una coleccion ordenadas de valores; Pueden contener cualquier tipo de dato: [1, true, false, null, undefined, '', {}]
 * 
 * Los array son colecciones de elementos con indices numericos, recuerden que esos indices cominezan de cero. 
 * 
 * A TENER EN CUENTA:
 *  -Pueden cambiar de tamanaños automaticamente
 *  -Contienen tipos de datos variados: [1, true, false, null, undefined, '', {}]
 *  -Tienen metodos (push, indexOf, lastIndexof, pop,push, unshit) y propiedades (length)
 */

const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon', 'Pera']
console.log('');
console.log('--FRUTAS ARREGLO ORIGINAL--');
console.log(frutas);

//Los metodos, como el indexOf, lastIndexOf, includes, tienen la misma sintaxis y hacen basicamente lo mismo en strs. Con la diferencia que en lugar de iterar sonbre caracteres, iteramos sobre elementos.


console.log('--indexOf--');

//indexOf => .indexOf(searchElement, index), buscara el indice del elemento, en caso de no encontrarlo retornara -1

console.log(frutas.indexOf('Melon')); //4
console.log(frutas.indexOf('Manzana')); //0
console.log(frutas.indexOf('Mango')); //-1
console.log(frutas.indexOf('Pera')); //1
console.log(frutas.indexOf('Pera', 2)); //5

//lastIndexOf => .lastIndexOf(searchValue,index). A diferencia del aterior, el busca de derecha a izquierda
console.log('--lastIndexOf--');

console.log(frutas.lastIndexOf('Pera', 3)); //1
console.log(frutas.lastIndexOf('Naranja', 3)); //2
console.log(frutas.lastIndexOf('Banana', 3)); //-1

//includes => .includes(searchValue,index), nos retorna true en caso de que el elemneto este en el array y false caso contrario
console.log('--includes--');

console.log(frutas.includes('Bananas')); //false
console.log(frutas.includes('Pera')); //true
console.log(frutas.includes('Pera', 3));

//toString() -> convertir un arreglo en str (estan separados los elementos por coma)
console.log('--toString--');
console.log(frutas.toString());

//join. Funciona como el toString(), a diferencia que puedo especificar el separador
console.log('--join--');
console.log(frutas.join(','));
console.log(frutas.join(' '));
console.log(frutas.join(''));
console.log(frutas.join('-'));
const stringArrayJoin = frutas.join('-#-')
console.log(stringArrayJoin);

//pop => extrae el ultimo elemento del array y lo retornando. Es decir que el pop alterna al array original
console.log('--pop--');
const ultimoElemetoDelArray = frutas.pop()
console.log(ultimoElemetoDelArray); //Pera
console.log(frutas); //[ 'Manzana', 'Pera', 'Naranja', 'Sandia', 'Melon' ]

//shift => extrae el primer elemento del array y lo retornando. Es decir que el shift alterna al array original
console.log('--shift--');

const primerElemetoDelArray = frutas.shift()
console.log(primerElemetoDelArray); //Manzana
console.log(frutas);


//push =>agrega el elemento al final del array
console.log('--push--');

frutas.push('Uva', 'Bananas')
console.log(frutas); //[ 'Pera', 'Naranja', 'Sandia', 'Melon', 'Uva', 'Bananas' ]

//unShifth =>agrega el elemento al comienzo del array
console.log('--unShifth--');

frutas.unshift('Manzana', 'Piña')
console.log(frutas); //['Manzana', 'Piña', 'Pera', 'Naranja', 'Sandia', 'Melon', 'Uva', 'Bananas' ]

//concat => devuelve un nuevo arreglo con todos los elementos actuales y esta agregando nuevos elementos( array, o elementos)
console.log('--concat--');

const g1 = ['Micael', 'Ruben', 'Alberto']
const g2 = ['Cherry', 'Malony', 'Martha']

const grupoDeIntegracion = g1.concat(g2)
console.log(grupoDeIntegracion); //[ 'Micael', 'Ruben', 'Alberto', 'Cherry', 'Malony', 'Martha' ]

const grupoDeIntegracion2 = g1.concat(g2, 'Carlos', 'Yure', 'Yure', 7)
console.log(grupoDeIntegracion2); //[ 'Micael', 'Ruben', 'Alberto', 'Cherry', 'Malony', 'Martha','Carlos', 'Yure', 'Yure',    7 ]

//Spred operator -> ECMAScript 6 / 2015 ()
console.log('--Spred operator--');
const grupoDeIntegracion3 = [...g1, ...g2, 'Luis', 'Camilo']
console.log(grupoDeIntegracion3);











