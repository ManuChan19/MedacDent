localStorage.clear();

/*Realizamos el formulario y lo pasamos a las tabla*/
const form = document.getElementById("my-form"); // get the form element
//Cuando hacemos el formulario y le damos a Aceptar
form.addEventListener("submit", e => {
  // detecta que hemos pusado aceptar
  e.preventDefault(); // nos mantiene en la pagina
  const {
    elements
  } = form; //metemos todos los datos en la constante elements
  let tabla = [];
  //if localstore true miramos su length para el codigo, else ponemos 1
  if (JSON.parse(localStorage.getItem("save"))) {
    const output = {
      codigo: (JSON.parse(localStorage.getItem("save")).length + 1),
      nombre: elements.nombre.value,
      apellidos: elements.apellidos.value,
      id: elements.id.value,
      fechanacimiento: elements.fechanacimiento.value,
      telefono: +elements.telefono.value,
      observaciones: elements.observaciones.value,
      fechacita: elements.fechacita.value,
      horacita: elements.hora.value,
      minutocita: elements.minuto.value
    };
    tabla = tabla.concat(JSON.parse(localStorage.getItem('save') || '[]'));
    tabla.push(output);

    localStorage.setItem("save", JSON.stringify(tabla)); // guardamos en localStore
    const tablacita = document.getElementById("tablacitas");
    let retrievedScores = JSON.parse(localStorage.getItem("save"))
    tablacita.innerHTML += "<tr><td>" + retrievedScores[output.codigo - 1].nombre +
      "</td><td>" + retrievedScores[output.codigo - 1].apellidos +
      "</td><td>" + retrievedScores[output.codigo - 1].id +
      "</td><td>" + retrievedScores[output.codigo - 1].fechanacimiento +
      "</td><td>" + retrievedScores[output.codigo - 1].telefono +
      "</td><td>" + retrievedScores[output.codigo - 1].observaciones + "</td><td>" +
      "</td><td>" + retrievedScores[output.codigo - 1].fechacita +
      "</td><td>" + retrievedScores[output.codigo - 1].horacita + ":"+ retrievedScores[output.codigo - 1].minutocita +"</td></tr>"
  } else {
    const output = {
      codigo: 1,
      nombre: elements.nombre.value,
      apellidos: elements.apellidos.value,
      id: elements.id.value,
      fechanacimiento: elements.fechanacimiento.value,
      telefono: +elements.telefono.value,
      observaciones: elements.observaciones.value,
      fechacita: elements.fechacita.value,
      horacita: elements.hora.value,
      minutocita: elements.minuto.value
    };
    tabla = tabla.concat(JSON.parse(localStorage.getItem('save') || '[]'));
    tabla.push(output);

    localStorage.setItem("save", JSON.stringify(tabla));
    const tablacita = document.getElementById("tablacitas");
    let retrievedScores = JSON.parse(localStorage.getItem("save"))
    tablacita.innerHTML += "<tr><td>" + retrievedScores[output.codigo - 1].nombre +
      "</td><td>" + retrievedScores[output.codigo - 1].apellidos +
      "</td><td>" + retrievedScores[output.codigo - 1].id +
      "</td><td>" + retrievedScores[output.codigo - 1].fechanacimiento +
      "</td><td>" + retrievedScores[output.codigo - 1].telefono +
      "</td><td>" + retrievedScores[output.codigo - 1].observaciones + "</td><td>" +
      "</td><td>" + retrievedScores[output.codigo - 1].fechacita +
      "</td><td>" + retrievedScores[output.codigo - 1].horacita + ":"+ retrievedScores[output.codigo - 1].minutocita +"</td></tr>"
  }
});

/*Boton para cargar los datos de los que tiene cita en el formulario*/
function buscarcita() {
  const formulariocita = document.getElementById('buscarcita');
  const { elements } = formulariocita;
  output = {
    id: elements.cita.value
  };

  console.log('Hasta')
  let retrievedScores = JSON.parse(localStorage.getItem("save"))
  let i = 0;
  while (retrievedScores[i].id !== output.id && i < retrievedScores.length) {
    console.log(retrievedScores[i].id.value);
    i++
  }
  let formulario = document.getElementById('my-form');
  formulario.elements['nombre'].value = retrievedScores[i].nombre;
  formulario.elements['apellidos'].value = retrievedScores[i].apellidos;
  formulario.elements['id'].value = retrievedScores[i].id;
  formulario.elements['fechanacimiento'].value = retrievedScores[i].fechanacimiento;
  formulario.elements['telefono'].value = retrievedScores[i].telefono;
  formulario.elements['observaciones'].value = retrievedScores[i].observaciones;
  formulario.elements['fechacita'].value = retrievedScores[i].fechacita,
  formulario.elements['hora'].value=retrievedScores[i].horacita;
  formulario.elements['minuto'].value=retrievedScores[i].minutocita;
}

/*Para fecha y hora de la cita no te deje poner una en el pasado*/

(function () {
//Acotar la fecha
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;//enero es el mes 0
  let año = hoy.getFullYear();
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }
  hoy = año + '-' + mes + '-' + dia;
  document.getElementById('fechacita').setAttribute('min', hoy);

  //Acotamos las horas
  function crearopcion(value, text) {
    let opcion = document.createElement('option');
    opcion.text = text;
    opcion.value = value;
    return opcion;
  }
  let selectorhora = document.getElementById('hora');
  for (i = 9; i <= 20; i++) {
    selectorhora.add(crearopcion(i, i));
  }
  let selectorminuto = document.getElementById('minuto');
  for (i = 0; i < 60; i += 15) {
    selectorminuto.add(crearopcion(i, i));
  }
})();
