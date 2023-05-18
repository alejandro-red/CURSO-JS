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

//ocupamos distructuring para acceder a los valores del objeto

const{nombre,informacion:{fabricacion:{pais}}}=producto;
console.log(nombre,pais);
console.log(fabricacion);
console.log(pais);