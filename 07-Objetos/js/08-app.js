//ocupamos un metodo que se llamma use Strict para una mejor practica
"use strict";


//a esta practica se le llama object Literal
const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true
    //los obejtos en JavaScript se les da valor con :
    }


//ocuparamos un object metod para que no pueda editar, agregar o elimnar nada dentro de el
Object.freeze(producto);

//ejemplos
//producto.nombre = "monitos de 32 pulgadas";   
//producto.precio = 500;
//producto.disponibilidad = false;

console.log(producto);

//metodo para saber si mi objeto esta congelado
console.log(Object.isFrozen(producto));//<-- aqui madara un true