let i=0;
let tabla = [];
localStorage.setItem("save", JSON.stringify(tabla));

(function () {

  const tablacita = document.getElementById("cuerpotabla");
  let retrievedScores = JSON.parse(localStorage.getItem("save"))
  if (retrievedScores.length > 0) {

    for (i = 0; i < retrievedScores.length; i++) {
      tablacita.innerHTML += "<tr id='" + (i + 1) + "'><td>" + retrievedScores[i].nombre +
        "</td><td>" + retrievedScores[i].apellidos +
        "</td><td>" + retrievedScores[i].id +
        "</td><td>" + retrievedScores[i].fechanacimiento +
        "</td><td>" + retrievedScores[i].telefono +
        "</td><td>" + retrievedScores[i].observaciones +
        "</td><td>" + retrievedScores[i].fechacita +
        "</td><td>" + retrievedScores[i].horacita + ":" + retrievedScores[i].minutocita +
        "</td><td><button id='delete" + (i + 1) + "' onclick='borrarFila(event)'>Borrar</button>" +
        "</td><td><button id='edit" + (i + 1) + "' onclick='editarFila(event)'>Editar</button></td></tr>";
    }
  } else {
    tablacita.innerHTML += "<tr><td colspan='8'> dato vacio </td></tr>"
  }
})()

/*Realizamos el formulario y lo pasamos a las tabla*/
const form = document.getElementById("citaForm"); // get the form element
//Cuando hacemos el formulario y le damos a Aceptar
form.addEventListener("submit", e => {
  // detecta que hemos pulsado aceptar
  e.preventDefault(); // nos mantiene en la pagina
  const {
    elements
  } = form; //metemos todos los datos en la constante elements
  let tabla = [];
  //if localstore true miramos su length para el codigo, else ponemos 1
  if (JSON.parse(localStorage.getItem("save")).length > 0) {
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
    const tablacita = document.getElementById("cuerpotabla");
    let retrievedScores = JSON.parse(localStorage.getItem("save"))
    tablacita.innerHTML += "<tr id='" + output.codigo + "'><td>" + retrievedScores[output.codigo - 1].nombre +
      "</td><td>" + retrievedScores[output.codigo - 1].apellidos +
      "</td><td>" + retrievedScores[output.codigo - 1].id +
      "</td><td>" + retrievedScores[output.codigo - 1].fechanacimiento +
      "</td><td>" + retrievedScores[output.codigo - 1].telefono +
      "</td><td>" + retrievedScores[output.codigo - 1].observaciones +
      "</td><td>" + retrievedScores[output.codigo - 1].fechacita +
      "</td><td>" + retrievedScores[output.codigo - 1].horacita + ":" + retrievedScores[output.codigo - 1].minutocita +
      "</td><td><button id='delete" + output.codigo + "' onclick='borrarFila(event)'>Borrar</button>" +
      "</td><td><button id='edit" + output.codigo + "' onclick='editarFila(event)'>Editar</button></td></tr>";


  } else {
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

    localStorage.setItem("save", JSON.stringify(tabla));
    const tablacita = document.getElementById("cuerpotabla");
    let retrievedScores = JSON.parse(localStorage.getItem("save"))
    tablacita.innerHTML = "<tr id='" + output.codigo + "'><td>" + retrievedScores[output.codigo - 1].nombre +
      "</td><td>" + retrievedScores[output.codigo - 1].apellidos +
      "</td><td>" + retrievedScores[output.codigo - 1].id +
      "</td><td>" + retrievedScores[output.codigo - 1].fechanacimiento +
      "</td><td>" + retrievedScores[output.codigo - 1].telefono +
      "</td><td>" + retrievedScores[output.codigo - 1].observaciones +
      "</td><td>" + retrievedScores[output.codigo - 1].fechacita +
      "</td><td>" + retrievedScores[output.codigo - 1].horacita + ":" + retrievedScores[output.codigo - 1].minutocita +
      "</td><td><button id='delete" + output.codigo + "' onclick='borrarFila(event)'>Borrar</button>" +
      "</td><td><button id='edit" + output.codigo + "' onclick='editarFila(event)'>Editar</button></td></tr>";
  }
});

/*Boton para cargar los datos de los que tiene cita en el formulario*/
function buscarcita() {
  const formulariocita = document.getElementById('buscarcita');
  const { elements } = formulariocita;
  let output = {
    id: elements.cita.value
  };

  let retrievedScores = JSON.parse(localStorage.getItem("save"))
  i = 0;
  while (retrievedScores[i].id !== output.id && i < retrievedScores.length) {
    i++
  }
  let formulario = document.getElementById('citaForm');
  formulario.elements['nombre'].value = retrievedScores[i].nombre;
  formulario.elements['apellidos'].value = retrievedScores[i].apellidos;
  formulario.elements['id'].value = retrievedScores[i].id;
  formulario.elements['fechanacimiento'].value = retrievedScores[i].fechanacimiento;
  formulario.elements['telefono'].value = retrievedScores[i].telefono;
  formulario.elements['observaciones'].value = retrievedScores[i].observaciones;
  formulario.elements['fechacita'].value = retrievedScores[i].fechacita;
  formulario.elements['hora'].value = retrievedScores[i].horacita;
  formulario.elements['minuto'].value = retrievedScores[i].minutocita;
  return i = i;
}

//Boton para actualizar la tabla con los datos nuevos

function actualizarTabla() {
  const form = document.getElementById("citaForm");
  const {
    elements
  } = form; //metemos todos los datos en la constante elements
  let tabla = [];
  //if localstore true miramos su length para el codigo, else ponemos 1
  if (JSON.parse(localStorage.getItem("save"))) {
    const output = {
      codigo: i + 1,
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
    tabla[i] = output;
    localStorage.setItem("save", JSON.stringify(tabla)); // guardamos en localStore
    const tablacita = document.getElementById("cuerpotabla");
    let retrievedScores = JSON.parse(localStorage.getItem("save"));
    document.getElementById(output.codigo).innerHTML = "<tr id='"+ output.codigo +"'><td>" + retrievedScores[output.codigo - 1].nombre +
      "</td><td>" + retrievedScores[output.codigo - 1].apellidos +
      "</td><td>" + retrievedScores[output.codigo - 1].id +
      "</td><td>" + retrievedScores[output.codigo - 1].fechanacimiento +
      "</td><td>" + retrievedScores[output.codigo - 1].telefono +
      "</td><td>" + retrievedScores[output.codigo - 1].observaciones +
      "</td><td>" + retrievedScores[output.codigo - 1].fechacita +
      "</td><td>" + retrievedScores[output.codigo - 1].horacita + ":" + retrievedScores[output.codigo - 1].minutocita +
      "</td><td><button id='delete" + output.codigo + "' onclick='borrarFila(event)'>Borrar</button>" +
      "</td><td><button id='edit" + output.codigo + "' onclick='editarFila(event)'>Editar</button></td></tr>";
  }
}

//Boton para borrar fila
function borrarFila(event) {
  let retrievedScores = JSON.parse(localStorage.getItem("save")); //cargamos el localStore
  let index;
  retrievedScores.splice(index, 1); //borramos el elemento en el array de localStore
  localStorage.setItem("save", JSON.stringify(retrievedScores)); //guardamos
  
  const parent = event.target.parentElement.parentElement; //apuntamos a la fila
  parent.remove();//borramos la fila de la tabla
  if (retrievedScores.length < 1) {
    document.getElementById("cuerpotabla").innerHTML += "<tr><td colspan='8'> dato vacio </td></tr>"
  }
}

//Boton para editar fila
function editarFila(event){
  let retrievedScores = JSON.parse(localStorage.getItem("save")); //cargamos el localStore
  let id=(event.target.parentElement.parentElement.id-1);
  const formulariocita = document.getElementById('buscarcita');
  const { elements } = formulariocita;
  let formulario = document.getElementById('citaForm');
  formulario.elements['nombre'].value = retrievedScores[id].nombre;
  formulario.elements['apellidos'].value = retrievedScores[id].apellidos;
  formulario.elements['id'].value = retrievedScores[id].id;
  formulario.elements['fechanacimiento'].value = retrievedScores[id].fechanacimiento;
  formulario.elements['telefono'].value = retrievedScores[id].telefono;
  formulario.elements['observaciones'].value = retrievedScores[id].observaciones;
  formulario.elements['fechacita'].value = retrievedScores[id].fechacita;
  formulario.elements['hora'].value = retrievedScores[id].horacita;
  formulario.elements['minuto'].value = retrievedScores[id].minutocita;
  return i = id;

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

//botones de ocultar y mostrar

function nuevacita() {
  document.getElementById('submitForm').style.animation = 'appear 2s both';
  document.getElementById('actualizarForm').style.animation = 'vanish 2s both';
  document.getElementById('buscarForm').style.animation = 'vanish 2s both';
}

function renovarcita() {
  document.getElementById('actualizarForm').style.animation = 'appear 2s both';
  document.getElementById('submitForm').style.animation = 'vanish 2s both';
  document.getElementById('buscarForm').style.animation = 'appear 2s both';
}

(function () {
  document.getElementById('actualizarForm').style.animation = 'vanish .1s both';
  document.getElementById('submitForm').style.animation = 'vanish .1s both';
  document.getElementById('buscarForm').style.animation = 'vanish .1s both';
})()