/*En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista 
de palabras.

Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, 
la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes 
devolver el primer palíndromo encontrado en la lista.

Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como 
hacia atrás.*/

function encontrarpalindromolargo(elementos) {
  let palindromoslargos = [];
  let longitud = 0;
  for (let i = 0; i < elementos.length; i++) {
    let objetos = Array.from(elementos[i]);
    let variante = Array.from(elementos[i]);
    let reverso = objetos.reverse();
    let cont = 0;
    for (let a = 0; a < variante.length; a++) {
      if (variante[a] === reverso[a]) {
        cont += 1;
      } else {
        break;
      }
    }

    // control 1
    if (cont === variante.length && elementos[i].length === longitud) {
      palindromoslargos.push(elementos[i]);
    }
    // control 2
    if (cont === variante.length && elementos[i].length > longitud) {
      palindromoslargos = [];
      palindromoslargos.push(elementos[i]);
    }
    //control 3
    if (cont === variante.length && elementos[i].length < longitud) {
      palindromoslargos.push(elementos[i]);
    }

    longitud = elementos[i].length;
  }
  if (palindromoslargos.length === 0) {
    console.log("null");
    return null;
  } else if (palindromoslargos.length === 1) {
    return palindromoslargos[0];
  } else {
    return palindromoslargos[0];
  }
}
encontrarpalindromolargo(["ARjA", "OtSO", "OSO", "SAMAS"]);
