const producto="monitor de 20 pulgadas";

//.repeat te va a  permitir repetir una cadena de texto

const texto =" en promocion".repeat(3);
console.log(texto); //<-- aqui con este se im´primira 3 veces 
console.log(` ${producto} ${texto} !!!!`)

//split dividir  un string 

const actividad ="estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));// para elimnar espacios de una cadena de texto

const hobbies ="leer, escribir,correr. programar";
console.log(hobbies.split(" , ")); // si es ordenamiento o elimancion por la coma 

const tweet =" aprendiendo a programar en #JavaScriptmodenor"
console.log(tweet.split(" # ")); //extrarera la parte de TAG 
