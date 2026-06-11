//1. Crea una función calcularAreaRectangulo que reciba dos parámetros:
//ancho: number
//alto: number
//Debe devolver el área del rectángulo. Declara una variable area para guardar el 
//resultado y muéstralo en pantalla.

function calcularAreaRectangulo(ancho: number, alto: number): number {
    const area: number = ancho * alto;
    console.log(`El área del rectángulo es: ${area}`);
    return area;
}
calcularAreaRectangulo(5, 10);