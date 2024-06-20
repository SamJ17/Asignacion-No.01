// Ejercicio No.01

const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
  { titulo: "1984", autor: "George Orwell", año: 1949 }
];

// Inicializar un arreglo vacío para almacenar los autores
let autores = [];

// Iterar sobre cada libro y extraer el autor
for (let i = 0; i < libros.length; i++) {
  autores.push(libros[i].autor);
}

// Mostrar el resultado
console.log(autores);


// Ejercicio No.02

const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };

// Verificar si la antigüedad es mayor a 5 años
if (empleado.antiguedad > 5) {
  // Calcular el aumento del 10%
  const aumento = empleado.salario * 0.1;
  // Sumar el aumento al salario actual
  empleado.salario += aumento;
}

// Imprimir los nuevos valores
console.log(`Nuevo salario de ${empleado.nombre}: ${empleado.salario}`);
console.log(`Antigüedad de ${empleado.nombre}: ${empleado.antiguedad} años`);


//Ejercicio No.03
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

// Inicializar una variable para almacenar el número mayor
let mayor = numeros[0]; // Se asume que el primer número es el mayor inicialmente

// Iterar sobre el arreglo para encontrar el número mayor
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

// Imprimir el número mayor encontrado
console.log(`El número mayor en la lista es: ${mayor}`);

Ejercicio No.04

const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2];

// Inicializar variables para calcular el promedio de impares
let sumaImpares = 0;
let cantidadImpares = 0;

// Iterar sobre el arreglo para sumar los números impares y contarlos
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) { // Verificar si el número es impar
    sumaImpares += numeros[i];
    cantidadImpares++;
  }
}

// Calcular el promedio de los números impares
let promedioImpares = 0;
if (cantidadImpares > 0) {
  promedioImpares = sumaImpares / cantidadImpares;
}

// Imprimir el resultado
console.log(`El promedio de los números impares en la lista es: ${promedioImpares}`);


Ejercicio No.05.

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };

// Desestructurar el objeto persona
const { nombre, edad, ciudad } = persona;

// Mostrar las variables en consola
console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);