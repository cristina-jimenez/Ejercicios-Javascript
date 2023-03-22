/*En este desafío tu función solution recibirá 3 parámetros:

* estudiantes: un array de strings con varios nombres de estudiantes.
* deathCount: un número entero.
* nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes 
y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando 
la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes 
que indica el número deathCount.*/

//----------------------------------------------------------VARIAS FORMAS DE RESOLVERLO-------------------------------------------------

//***FORMA 1.- Imprimir un array con otro elemento.
function solution(estudiantes, deathCount, nuevo) {
    console.log(estudiantes, nuevo);
 }
solution(["pepe", "Juan", "Lucas", "marcos", "erick"], 0, "Felipe");
        
//resultado: ['pepe', 'Juan', 'Lucas', 'marcos', 'erick'] 'Felipe'


//***FORMA 2.- USO DE PUSH - Aqui al usar push estamos cambiando la variable.
function solution(estudiantes, deathCount, nuevo) {
    estudiantes.push(nuevo);
    return estudiantes;
 }
solution(["pepe", "Juan", "Lucas", "marcos", "erick"], 0, "Felipe");
        
// resultado: (6) ['pepe', 'Juan', 'Lucas', 'marcos', 'erick', 'Felipe']


//***FORMA 3.- (para no poner push)
function solution(estudiantes, deathCount, nuevo) {
    return [...estudiantes, nuevo];
 }
solution(["pepe", "Juan", "Lucas", "marcos", "erick"], 0, "Felipe");
        
//resultado: (6) ['pepe', 'Juan', 'Lucas', 'marcos', 'erick', 'Felipe']



//***FORMA 4.- En forma de funciòn expresiva
const solution = (estudiantes, deathCount, nuevo) => {
    estudiantes.push(nuevo);
    return estudiantes;
 }
solution(["pepe", "Juan", "Lucas", "marcos", "erick"], 0, "Felipe");

//resultado (6) ['pepe', 'Juan', 'Lucas', 'marcos', 'erick', 'Felipe']

