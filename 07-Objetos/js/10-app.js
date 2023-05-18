//a esta practica se le llama object Literal
const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true
    //los obejtos en JavaScript se les da valor con :
    }

//practica para poder unir dos obejtos
const medidas={
peso:"1kg",
medida:"1m"

}

//ejemplo de un 3 objeto

const pais={
    pais:"USA",
    capital:"Washington D.C."
}


//primer metodo para unir a los obejtos
const resultado =Object.assign(producto , medidas , pais);
console.log(resultado);

//segundo metodo para unir a los objetis
const resultado2 = Object.assign={...producto,...medidas,...pais};
console.log(resultado2);