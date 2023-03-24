/* En este desafío, debes dibujar un triángulo isósceles usando bucles.

Recibirás dos parámetros: size y character, que definen el tamaño y el carácter con el que se 
debe construir el triángulo, respectivamente. Además, el triángulo debe estar alineado a la 
derecha, lo que significa que la columna más derecha del triángulo debe estar en el borde 
derecho de la consola.

Recuerda que para hacer el salto de línea debes usar "\n", no olvides removerla de la última 
parte.  */
//--------------------un solo character -------------------
function printTriangle(size, character) {
  // Tu código aquí 👈
  const space = " ";
  let triangulo = [];
  for (let b = 1; b < size; b++) {
    let h = size - b;
    triangulo += space.repeat(h);
    triangulo += character.repeat(b) + "\n";
  };
  return triangulo;
};
printTriangle(8, "*");

//-------------------------varios caracteres---------
function printTriangle(size, character) {
  // Tu código aquí 👈
  const space = " ";
  let triangulo = [];
  let numerodecaracter= character.length
  for (let b = 1; b < size; b++) {
    let h = size - b;
    triangulo += space.repeat(h*numerodecaracter);
    triangulo += character.repeat(b) + "\n";
  };
  return triangulo;
};
printTriangle(8, "<3");

