//2. Crea una función presentarPersona que reciba:
//nombre: string
//edad?: number (opcional)
//Si se envía la edad, debe devolver:
//"Juan tiene 30 años“ Si no, solo debe devolver el nombre.

function presentarPersona(nombre: string, edad?: number): string {
    if (edad !== undefined) {
        return `${nombre} tiene ${edad} años`;
    }
    return nombre;
}
console.log(presentarPersona("Juan", 30));
console.log(presentarPersona("María"));