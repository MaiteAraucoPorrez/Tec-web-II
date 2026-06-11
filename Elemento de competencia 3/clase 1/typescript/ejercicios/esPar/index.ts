//4. Crea una función esPar que reciba:
//numero: number
//Debe devolver true si el número es par, y false si es impar.
//Imprime el resultado en consola.

function esPar(numero: number): boolean {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(5)); // false
export { esPar };
