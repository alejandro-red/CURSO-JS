//como agregar un obejto dentro de otro objeto
const producto = {
    nombre: "monitos de 20 pulgadas", //<-- a esto se le conoco como una llave osea el valor Nombre
    precio: 300,
    disponibilidad: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"


        },
        fabricacion: {
            pais: "china"
        }

    }

}

console.log(producto);
console.log(producto.precio);
console.log(informacion);
console.log(informacion.fabricacion.pais);
console.log(medida.peso);
console.log(fabricacion.pais);
