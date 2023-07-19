let productos = {};

function llenarProductos() {
  for (let i = 1; i <= 3; i++) {
    const producto = document.getElementById(`producto${i}`).value;
    const precio = parseFloat(document.getElementById(`precio${i}`).value);
    const cantidad = parseInt(document.getElementById(`cantidad${i}`).value);

    productos[`producto${i}`] = {
      producto: producto,
      precio: precio,
      cantidad: cantidad,
    };
  }
}


function calcularTotales() {
  llenarProductos();

  let totalPagar = 0;
  for (let key in productos) {
    totalPagar += productos[key].precio * productos[key].cantidad;
  }

  
  const totalConIVA = totalPagar * 1.19;

 
  const resultadoProductos = document.getElementById("resultadoProductos");
  resultadoProductos.innerHTML = "<h3>Datos de los productos:</h3>";
  for (let key in productos) {
    resultadoProductos.innerHTML += `<p>Producto: ${productos[key].producto} | Precio: ${productos[key].precio} | Cantidad: ${productos[key].cantidad}</p>`;
  }

  const resultadosTotales = document.getElementById("resultadosTotales");
  resultadosTotales.innerHTML = "<h3>Totales:</h3>";
  resultadosTotales.innerHTML += `<p>Total a Pagar: ${totalPagar.toFixed(
    2
  )}</p>`;
  resultadosTotales.innerHTML += `<p>Total con IVA: ${totalConIVA.toFixed(
    2
  )}</p>`;
}


const cupones = [
  { cupon: "semana10", descuento: "20%", fecha_caducidad: "2023-07-29" },
  {
    cupon: "comprasmayores100",
    descuento: "10%",
    fecha_caducidad: "2023-07-25",
  },
  { cupon: "viernesloco", descuento: "15%", fecha_caducidad: "2023-07-27" },
];


function cambiarClaveCuponPorNombre(cuponesArray) {
  const nuevosCupones = cuponesArray.map((cupon) => {
    const { cupon: nombre, ...restoCupon } = cupon;
    return { nombre, ...restoCupon };
  });
  return nuevosCupones;
}


const cuponesConNombre = cambiarClaveCuponPorNombre(cupones);


const resultadoCupones = document.createElement("div");
resultadoCupones.innerHTML = '<h3>Cupones con clave "nombre":</h3>';
for (let cupon of cuponesConNombre) {
  const { nombre, descuento, fecha_caducidad } = cupon;
  resultadoCupones.innerHTML += `<p>Nombre: ${nombre} | Descuento: ${descuento} | Fecha de Caducidad: ${fecha_caducidad}</p>`;
}

document.body.appendChild(resultadoCupones);