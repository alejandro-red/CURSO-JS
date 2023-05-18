

const producto = {
    nombre: "monitos de 20 pulgadas",
    precio: 300,
    disponibilidad: true,

}

console.log(Object.keys(producto)); //<-- manda las llaves del objeto osea los del lado izquierdo
console.log(Object.values(producto));//<-- manda los valores de las llaves osea los del lado derecho
console.log(Object.entries(producto));//<-- manda los valores en pares 