const numero1 = 20;
const numero2  ="20";
const numero3 = 30;

//resvisar si dos numeros son iguales
console.log(numero1 == numero2);
console.log(numero1 == numero3);

//conparador estricto
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2)); //lo convertimos de un string a un entero
console.log(typeof numero1); // aqui se muestra el tipo de dato y es NUMBER
console.log(typeof numero2); // aqui se muestra eñ tipo de dato y es STRING

//DIFERENTE
const password1="admin";
const password2="admin2";

console.log(password1 != password2);
console.log(numero1 != numero2);
// pero si convertimos el tipo de dato de numero 2 de string a Int
console.log(numero1 != parseInt(numero2));
