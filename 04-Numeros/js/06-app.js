const numero1="20";
const numero2="30.2";
const numero3="uno";
const numero4=30.2;

console.log(numero1);
//fuincione para convertir de un string a un número
console.log(Number.parseInt(numero1));
//funcion para poder comvertir un numero string a float
console.log(Number.parseFloat(numero2));
//misma funcion , retornara un true si enterno o no en su caso es un FALSE
console.log(Number.parseInt(numero3));


//revisar si el numero es entero o no
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero4));