const producto="monitor de 20 pulgadas ";

//.replace para remplazar

console.log(producto);
console.log(producto.replace("pulgadas", ' " '));
console.log(producto.replace("monitor", " monitor curvo "));  


//.slice pra cortar carctertes
console.log(producto.slice(0,10));
console.log(producto.slice(15));

//alternativa de slice 
console.log(producto.substring(0,10));
console.log(producto.substring( 2,1)); //substring lo sobreedita osea no se puede engañar

const usuario ="alejandro";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));