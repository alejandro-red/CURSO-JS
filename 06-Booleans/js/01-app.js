const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

/// para saber su tipo de datos

console.log(typeof boolean1);

//comparar los booleans

console.log(boolean1 === boolean3);


//otra forma de poder crear booleans

const boolean = new Boolean(true);
console.log(boolean);
console.log(typeof boolean);