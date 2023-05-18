//a esta practica se le llama object Literal
const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true
    //los obejtos en JavaScript se les da valor con :
    }

//agregar nuevas propiedades al Objeto
producto.color="azul";
producto.tamaño="grande";
producto.marca="samsung";
producto.modelo="s10";
producto.capacidad="16gb";
producto.procesador="intel";
producto.imagen="imagen.jpg";

//para eliminar propiedades del objeto
delete producto.color;

console.log(producto);
