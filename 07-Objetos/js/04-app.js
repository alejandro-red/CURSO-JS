//a esta practica se le llama object Literal
const producto={
    nombre:"monitos de 20 pulgadas", //<-- a esto se le conoco como una llave osea el valor Nombre
    precio:300,
    disponibilidad :true
    //los obejtos en JavaScript se les da valor con :
    }

    //forma en la que se usaba antes para ccesar a los valores del obejeto
    //const nombre = producto.nombre
    //console.log(nombre);

//nuevo metodo de acceder a los valores del obejto y su llave
const{nombre , precio , disponibilidad} = producto;
console.log(nombre);
console.log(precio);
console.log(disponibilidad);

