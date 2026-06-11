//3. Crea una función convertirDolares que reciba:
//monto: number (en dólares)
//tipoCambio: number (valor Bs. x dolar)
//Debe devolver el monto convertido. Muestra el resultado.

function convertirDolares(monto: number, tipoCambio: number): number {
    const montoConvertido = monto * tipoCambio;
    console.log(`El monto convertido es: ${montoConvertido} Bs.`);
    return montoConvertido;
}

const montoEnDolares = 100;
const tipoCambio = 4.5;
convertirDolares(montoEnDolares, tipoCambio);
