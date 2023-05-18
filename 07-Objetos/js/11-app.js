
const producto={
    nombre:"monitos de 20 pulgadas",
    precio:300,
    disponibilidad :true,
    //creamos una funcion  
    mostrarInfo:function(){
        //ocupmos this para poder asigar o llamara directamente el valor de este mismo
        console.log(`El producto : ${this.nombre} tiene un precio de : ${this.precio}`);

    }
  
    }
    const producto2={
        nombre:"tablet",
        precio:30000,
        disponibilidad :true,
        //creamos una funcion  
        mostrarInfo:function(){
            //ocupmos this para poder asigar o llamara directamente el valor de este mismo
            console.log(`El producto : ${this.nombre} tiene un precio de : ${this.precio}`);
    
        }
      
        }
    //imprimimos los valores del objeto
    producto.mostrarInfo();
    producto2.mostrarInfo();