//ocupamos un metodo que se llamma use Strict para una mejor practica
"use strict";


//a esta practica se le llama object Literal
const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true
    //los obejtos en JavaScript se les da valor con :
    }


//ocuparamos un object metod para que no pueda  agregar o elimnar 
//pero si podamos editar dentro de el y se llama SEAL
Object.seal(producto);

//ejemplos
//producto.nombre = "monitos de 32 pulgadas";   
//producto.precio = 500;
//producto.disponibilidad = false;

console.log(producto);

//pata saber si nuestro objto esta sellado
console.log(Object.isSealed(producto));
