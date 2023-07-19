
let frutas = ['manzana', 'pera', 'naranja', 'plátano', 'uva', 'sandía'];


let frutasPares = [];
let frutasImpares = [];


frutas.forEach((fruta, index) => {
  if (index % 2 === 0) {
    frutasPares.push(fruta);
  } else {
    frutasImpares.push(fruta);
  }
});

const ejercicio1 = document.getElementById('ejercicio1');
ejercicio1.innerHTML += '<h1>Solucion Ejercicio 1:</h1>';
ejercicio1.innerHTML += '<p>Guarda en un Array 6 frutas y muestra en el navegador cuales están guardadas en las posiciones pares e impares </p>';
ejercicio1.innerHTML += '<h4>Frutas en posiciones pares:</h4>';
ejercicio1.innerHTML += '<p>' + frutasPares.join(', ') + '</p>';

ejercicio1.innerHTML += '<h4>Frutas en posiciones impares:</h4>';
ejercicio1.innerHTML += '<p>' + frutasImpares.join(', ') + '</p>';

