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

console.log('');
console.log('--vierness--');
console.log('');

const estudiantes = ['Fermin', 'Luis', 'Yure', 'Camilo', 'Jonathan', 'Alberto', 'Dana', 'Roberto', 'Juan']

console.log(estudiantes);


//SPLICE: Se utiliza para el contenido de un array, eliminando elementos y/o agregando elementos.

/**
 * Desde:(la posicion) el indice de donde empezara a operar
 *
 * cuantos:(el numero de elementos que deseo eliminar)
 *
 * elementos: (opcoional, son los elementos que voy anñadir al array)
 */
//En caso que elimine elementos, me dara un array con los elementos eliminados, en caso que no elimine ningun elemento, me dara un array vacio.Es decir de longitud cero.

console.log('--splice--');

console.log(estudiantes.splice(2, 2)); //['Yure', 'Camilo']

console.log(estudiantes); //['Fermin', 'Luis', 'Jonathan', 'Alberto', 'Dana', 'Roberto', 'Juan']



console.log(estudiantes.splice(4, 0, 'Carlos', 'Micael')); //[], el array esta vacio, porque elimine cero elementos. Ahora Carlos ocupa el indice 4, y Micael el 5. 
console.log(estudiantes); //['Fermin',   'Luis', 'Jonathan', 'Alberto','Carlos',   'Micael', 'Dana',     'Roberto', 'Juan']

console.log(estudiantes.splice(-1, 1, 'Alexander')); //['Juan']
console.log(estudiantes); //['Fermin',    'Luis', 'Jonathan',  'Alberto','Carlos',    'Micael', 'Dana',      'Roberto', 'Alexander']


//.slice: crea un nuevo array, y copia elementos desde la posicion que indique, hasta la posicion que desee. Es importante mencionar, que el ultimo indice no lo incluye para operar.

console.log('--slice--');
const colores = ['rojo', 'verde', 'azul', 'amarillo']
//                 0        1        2       3

console.log(colores.slice(1, 3));//['verde', 'azul']

console.log(colores); //[ 'rojo', 'verde', 'azul', 'amarillo' ]
console.log(colores.slice(1));//[ 'verde', 'azul', 'amarillo' ]
console.log(colores.slice(0));//['rojo', 'verde', 'azul', 'amarillo']
console.log(colores.slice());//['rojo', 'verde', 'azul', 'amarillo']
console.log(colores.slice(2, 3));//[ 'azul']

console.log(colores.slice(-1)); //['amarillo']
console.log(colores.slice(-2)); //[ 'azul', 'amarillo' ]
console.log(colores.slice(-4)); //[ 'azul' ]


//.reverse() : oredena el array de forma inversa y lo retorna
console.log('--reverse--');
const numeros = [10, 20, 30, 40, 50]
console.log(numeros);
console.log(numeros.reverse()); //[ 50, 40, 30, 20, 10 ]


//sort() : ordena los elementos de un array. De manera predeterminad , el sort ordena los elementos alfabeticamente. En caso de que sean numeros, los va a convertir a str. El metodo sort es muy flexible, ya que nativamente nos ordena alfabeticamente, pero acepta funciones, en nosotros podemos indicar como queremos que nos oredene. 
console.log('--sort--');

const abc = ['o', 'e', 'i', 'u', 'a']

console.log(abc.sort()); //[ 'a', 'e', 'i', 'o', 'u' ]
console.log(abc.sort().reverse()); //[ 'u', 'o', 'i', 'e', 'a' ]

const desordenados = [34, 12, 24, 9, 5]


//-1,0,1
/**
 * (a,b) a es menor que b => (1-3) <-1. Entonces, a es menor que b. (-1). Primero va ir a, y luego va ir b
 * 
 * (a,b)  a es mayor que b => (4-1) >1. Entonces, a es mayor que b. (1). Primero ira b, y luego ira a
 * 
 * 
 *(a,b) a es igual que b, (4-4) = 0. Entonces cuando nos dara cero, significa que son iguales
 * 
 */

// function menorAmayor(a, b) {
//   if (a - b < -1) return -1 //significa que a es menor que b
//   else if (a - b > 1) return 1 //significa a es mayor que b
//   return 0 //significa a es igual que b
// }

console.log(desordenados.sort((a, b) => b - a)); //de mayor a menor

console.log(desordenados.sort((a, b) => a - b)); //menor a mayor


//.map() ->  cada vez que que crean un array vacio, y reccoren un array para pushear al array vacio, lo pueden resolver con un map(). Nos retorna un array nuevo

//.filter() ->cada vez que que crean un array vacio, y reccoren un array para pushear, pero antes de pushear van hacer una validacion(es decir que aplicaran un if) , entonces esto lo pueden resolver con un filter().Nos retorna un array nuevo

//find() -> lo podemso pensar como el includes, pero en lugar de retornanr true or false, nos dara el elemento, el primero que encuentre. Nos retorna el elemento

//reducer() -> esta reduciendo el array a un unico valor numerico. Nos retorna un valor numerico








































