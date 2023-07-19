let numeros = [];


for (let i = 0; i < 5; i++) {
  let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
  numeros.push(numero);
}


let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);


let suma = numeros.reduce((total, numero) => total + numero, 0);
let promedio = suma / numeros.length;

const ejercicio2 = document.getElementById('ejercicio2');
ejercicio2.innerHTML += '<h1>Solucion Ejercicio 2:</h1>';
ejercicio2.innerHTML += '<p>Llene un array con mínimo 5 números al azar ingresandolos por el navegador, y muestre cual es el mayor, cuál es el menor y el promedio de los números ingresados.</p>';


ejercicio2.innerHTML += '<h4>Números ingresados:</h4>';
ejercicio2.innerHTML += '<p>' + numeros.join(', ') + '</p>';

ejercicio2.innerHTML += '<h4>Número mayor:</h4>';
ejercicio2.innerHTML += '<p>' + maximo + '</p>';

ejercicio2.innerHTML += '<h4>Número menor:</h4>';
ejercicio2.innerHTML += '<p>' + minimo + '</p>';

ejercicio2.innerHTML += '<h4>Promedio:</h4>';
ejercicio2.innerHTML += '<p>' + promedio.toFixed(2) + '</p>';