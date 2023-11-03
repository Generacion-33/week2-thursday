/***************************/
/* Ejercicios con bucles: */
/**************************/

// 1. Crea un arreglo con los números del 1 al 20 // Investigar el método .push para array

const array = []

for (let i = 1; i <= 20; i++) {
  array.push(i)
}
console.log(array);

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.

function range(num1, num2) {
  const range = []
  for (let i = num1; i <= num2; i++) {
    range.push(i)
  }
  return range
}

console.log(range(1, 4));


// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.

function adction(array) {
  let suma = 0

  for (let i = 0; i < array.length; i++) {
    suma += array[i]
  }
  return suma
}

const test1 = [1, 2, 3, 4]
console.log(adction(test1)); //10



// 4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]
//! Investigar Math.floor ⚠️
//* Math.floor ==> redondea hacia abajo. ⚠️
//* Math.ceil ==> redondea hacia arriba. ⚠️

console.log('...');

function midRange(array) {

  let solution = null

  let i = Math.floor((array.length) / 2)

  array.length % 2 === 0 ?
    solution = [array[i - 1], array[i]] :
    solution = array[i]

  return solution
}

console.log(midRange([1, 3, 4, 5, 5, 3]));
console.log(midRange([1, 3, 4]));






