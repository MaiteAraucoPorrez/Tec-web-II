"use strict";
function presentaPersona(nombre, edad) {
    if (edad !== undefined) {
        return `${nombre} tiene ${edad} años.`;
    }
    return `Tu nombre es ${nombre}.`;
}
console.log(presentaPersona("Juan", 30));
console.log(presentaPersona("María"));
