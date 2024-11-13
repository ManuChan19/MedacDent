localStorage.clear();
const form = document.getElementById("my-form"); // get the form element



//Cuando hacemos el formulario y le damos a Aceptar
form.addEventListener("submit", e => {
  // detecta que hemos pusado aceptar
  e.preventDefault(); // nos mantiene en la pagina
  const {
    elements
  } = form; //metemos todos los datos en la constante elements
  let tabla = [];
  //if localstore true miramos su length para el codigo, si no ponemos 1
  if (JSON.parse(localStorage.getItem("save"))){
  const output = {
    codigo: (JSON.parse(localStorage.getItem("save")).length+1),
    nombre: elements.nombre.value, 
    age: +elements.age.value, 
    hobby: elements.hobby.value 
  };
  tabla = tabla.concat(JSON.parse(localStorage.getItem('save')||'[]'));
  tabla.push(output);

  localStorage.setItem("save", JSON.stringify(tabla)); // save output to localStorage
  const tablacita = document.getElementById("tablacitas");
  let retrievedScores = JSON.parse(localStorage.getItem("save"))
  console.log(JSON.parse(localStorage.getItem("save")).length-1);
  console.log(output.codigo);
    tablacita.innerHTML += "<tr><td>" + retrievedScores[output.codigo-1].nombre + "</td><td>" + retrievedScores[output.codigo-1].age + "</td><td>" + retrievedScores[output.codigo-1].codigo + "</td><td>" + retrievedScores[output.codigo-1].hobby + "</td></tr>";
}else{
    const output = {
      codigo: 1,
      nombre: elements.nombre.value, 
      age: +elements.age.value, 
      hobby: elements.hobby.value 
    };
    tabla = tabla.concat(JSON.parse(localStorage.getItem('save')||'[]'));
    tabla.push(output);

    localStorage.setItem("save", JSON.stringify(tabla)); // save output to localStorage
    const tablacita = document.getElementById("tablacitas");
    let retrievedScores = JSON.parse(localStorage.getItem("save"))
    console.log(JSON.parse(localStorage.getItem("save")).length-1);
    console.log(output.codigo-1);
      tablacita.innerHTML += "<tr><td>" + retrievedScores[output.codigo-1].nombre + "</td><td>" + retrievedScores[output.codigo-1].age + "</td><td>" + retrievedScores[output.codigo-1].codigo + "</td><td>" + retrievedScores[output.codigo-1].hobby + "</td></tr>";
  }});