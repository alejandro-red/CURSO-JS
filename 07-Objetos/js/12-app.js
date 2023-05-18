//objetc literal

const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true,
   
  
    }

//object Constructor
function Producto(nombre, precio){ //<-- le pasamos parametros 
    this.nombre = nombre; //<-- con this accedemos a esa información y la asignamos a ese valor
    this.precio = precio;
    this.disponibilidad = true;


}

const producto2 = new Producto("asus TUF f15" , 30000);//<-- CREAMOS UNA VARIABLE BANDERA Y ASIGANOS EL VALOR DE LA FUNCION
console.log(producto2);

const producto3 = new Producto("asus idea pad" , 2000)
console.log(producto3)