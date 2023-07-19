
let empleados = [
  {nombre: "pedro", salario: 5000000, profesion: "Abogado"},
  {nombre: "Angie", salario: 3900000, profesion: "Odontóloga"},
  {nombre: "Luis", salario: 2500000, profesion: "Asesor Bancario"},
  {nombre: "Lina", salario: 4500000, profesion: "Psicóloga"}
];

empleados.forEach((empleado) => {
    if (empleado.nombre === "Lina") {
      empleado.profesion = "Developer";
    }
  });

let apellidos = ["Gómez", "Hernández", "Vargas", "Martínez"];

function agregarApellidos() {
  empleados.forEach((empleado, index) => {
    empleado.apellido = apellidos[index];
  });
}
agregarApellidos();

empleados.sort((a, b) => b.salario - a.salario);

let sumaSalarios = empleados.reduce((total, empleado) => total + empleado.salario, 0);

const resultado = document.getElementById('resultado');
resultado.innerHTML += '<h2>Empleados:</h2>';
empleados.forEach((empleado) => {
    resultado.innerHTML += '<p>Nombre: ' + empleado.nombre + ' ' + empleado.apellido + ' | Profesión: ' + empleado.profesion + ' | Salario: ' + empleado.salario + '</p>';
  });

resultado.innerHTML += '<h2>Empleados ordenados por salario (de mayor a menor):</h2>';
empleados.forEach((empleado) => {
  resultado.innerHTML += '<p>Nombre: ' + empleado.nombre + ' ' + empleado.apellido + ' | Profesión: ' + empleado.profesion + ' | Salario: ' + empleado.salario + '</p>';
});

resultado.innerHTML += '<h2>Suma Total de Salarios:</h2>';
resultado.innerHTML += '<p>' + sumaSalarios + '</p>';
