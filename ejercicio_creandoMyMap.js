/*En este desafío debes desarrollar una implementación personalizada del método map utilizando funciones de orden superior.

Recibirás como parámetros un array y una función (func). El array contendrá un conjunto de elementos (números, objetos, strings, etc.) 
y la función se utilizará para aplicar una acción sobre cada elemento del array. Tu objetivo es devolver un nuevo array con los resultados 
de la función tal y como lo haría el método map.

Ejemplo 1:

Input: myMap([1,2,3,4], (num) => num * 2)

Output: [2,4,6,8]*/

function myMap(array, func) {
  let i = 0;
  let rtaDelMap = [];
  while (i < array.length) {
    const element = array[i];
    rtaDelMap.push(func(element));
    i++;
  }
  return rtaDelMap;
}



myMap([1, 7, 3, 4], (num) => num * 2);
myMap(
  [
    { name: "michi", age: 2 },
    { name: "firulais", age: 6 },
  ],
  (pet) => pet.name
);