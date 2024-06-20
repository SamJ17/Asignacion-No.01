// Ejercicio No.01
const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
  { titulo: "1984", autor: "George Orwell", año: 1949 }
];

let autores = [];
for (let i = 0; i < libros.length; i++) {
  autores.push(libros[i].autor);
}
console.log(autores);




// Ejercicio No.02
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
if (empleado.antiguedad > 5) {
  const aumento = empleado.salario * 0.1;
  empleado.salario += aumento;
}

console.log(`Nuevo salario de ${empleado.nombre}: ${empleado.salario}`);
console.log(`Antigüedad de ${empleado.nombre}: ${empleado.antiguedad} años`);




//Ejercicio No.03
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}
console.log(`El número mayor en la lista es: ${mayor}`);



//Ejercicio No.04
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];
let sumaImpares = 0;
let cantidadImpares = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    sumaImpares += numeros[i];
    cantidadImpares++;
  }
}

let promedioImpares = 0;
if (cantidadImpares > 0) {
  promedioImpares = sumaImpares / cantidadImpares;
}
console.log(`El promedio de los números impares en la lista es: ${promedioImpares}`);




//Ejercicio No.05.
const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
const { nombre, edad, ciudad } = persona;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);
