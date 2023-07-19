
let arregloCompleto = ['zanahoria', 'banano', 'manzana', 'pera', 'cebolla', 'papa', 'fresas', 'Ajo', 'Sandía'];

let frutasValidas = ['zanahoria', 'banano', 'manzana', 'pera', 'fresas', 'Sandía'];

let frutas = arregloCompleto.filter(elemento => frutasValidas.includes(elemento.toLowerCase()));

const ejercicio3 = document.getElementById('ejercicio3');
ejercicio3.innerHTML += '<h1>Solucion ejercicio 3</h1>';
ejercicio3.innerHTML += '<p> Del siguiente arreglo [zanahoria,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] solo las frutas en el navegador.</p>';
ejercicio3.innerHTML += '<h4>Frutas:</h4>';
ejercicio3.innerHTML += '<p>' + frutas.join(', ') + '</p>';