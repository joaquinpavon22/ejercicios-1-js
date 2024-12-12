// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("Ejercicios N°1 Completado");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write("Hello World");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

console.log(3 + 5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo:

//input: Coder
//Output: Hola Coder
let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombreUsuario);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let numberOne = parseInt("24");
let numberTwo = parseInt("2");
console.log(numberOne + numberTwo);

// 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo:
//input: 15 , 3

//Output: El 15 es el número más grande

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));

if (num1 > num2) {
  console.log("El " + num1 + " es el número más grande");
} else if (num2 > num1) {
  console.log("El " + num2 + " es el número más grande");
} else {
  console.log("Ambos números son iguales");
}

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejemplo:
//input: 15 , 3, 9
//Output: El 15 es el número más grande
// Solicitar tres números al usuario

let num3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor;

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
} else {
  mayor = num3;
}

console.log(`El ${mayor} es el número más grande.`);

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
//Ejemplo:

//input: 10
//input: 15
//Output: El 10 es divisible por 2.
//Output: El 15 no es divisible por 2.

if (num1 % 2 === 0) {
  console.log(`El ${num1} es divisible por 2.`);
  alert(`El ${num1} es divisible por 2.`);
} else {
  console.log(`El ${num1} no es divisible por 2.`);
  alert(`El ${num1} no es divisible por 2.`);
}

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
//Ejemplo:

//input: Hola mundo
//Output: oauo

let frase = prompt("Ingrese una frase para contar vocales").trim();

frase = frase.toLowerCase();
console.log(frase);

console.log(frase.length);

let vocalesEncontradas = "";

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i)
  if(
    caracter=== "a"||
    caracter=== "e" ||
    caracter === "i" ||
    caracter === "o"||
    caracter === "u"
  ){
    vocalesEncontradas+=caracter
 
    

  }
  
}
console.log(`Cantidad de vocales encontradas: ${vocalesEncontradas.length} (${vocalesEncontradas})`);




// ejercicio 10
var numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  console.log(`El ${numero} es divisible por 2.`);
  alert(`El ${numero} es divisible por 2.`);
} else if (numero % 3 === 0) {
  console.log(`El ${numero} es divisible por 3.`);
  alert(`El ${numero} es divisible por 3.`);
} else if (numero % 5 === 0) {
  console.log(`El ${numero} es divisible por 5.`);
  alert(`El ${numero} es divisible por 5.`);
} else if (numero % 7 === 0) {
  console.log(`El ${numero} es divisible por 7.`);
  alert(`El ${numero} es divisible por 7.`);
} else {
  console.log(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
  alert(`El ${numero} no es divisible por 2, 3, 5 ni 7.`);
}

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
//Ejemplo:

//input: 20
//nput: 210

//Output: El 20 es divisible por 2 y por 5.
//Output: El 210 es divisible por 2, por 3, por 5 y por 7.

var numero = parseInt(prompt("Ingrese un número:"));
let mensaje = `El número ${numero} es divisible por: `;

if (numero % 2 === 0) {
  mensaje += "2 ";
}
if (numero % 3 === 0) {
  mensaje += "3 ";
}
if (numero % 5 === 0) {
  mensaje += "5 ";
}
if (numero % 7 === 0) {
  mensaje += "7 ";
}

if (mensaje === `El número ${numero} es divisible por: `) {
  mensaje = `El número ${numero} no es divisible por 2, 3, 5 ni 7.`;
}

console.log(mensaje);
alert(mensaje);
