function saludar(nombre: string, edad?: number): string {
return edad ? `${nombre} tiene ${edad}` : nombre;
}
console.log(saludar('Marcela',20))
/*
nombre: string              parámetro obligatorio; debe ser un string.
edad?: number              parámetro opcional; puede ser un número o no proporcionarse.
El operador "?" indica que el parámetro "edad" es opcional, lo que significa que la función 
puede ser llamada con uno o dos argumentos. Si se proporciona el segundo argumento, 
se incluirá en el mensaje de saludo; de lo contrario, solo se mostrará el nombre.*/