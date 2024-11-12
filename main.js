localStorage.clear();
const form = document.getElementById("my-form"); // get the form element
form.addEventListener("submit", e => {
  // detect once the submit button is clicked
  e.preventDefault(); // Don't allow the form to redirect to another page
  const {
    elements
  } = form; // Get input elements so we can retrieve their values
  let tabla = [];
  const output = {
    nombre: elements.nombre.value, // get name
    age: +elements.age.value, // get age; the "+" in front converts it to a number
    hobby: elements.hobby.value // get hobby
  };


  tabla.push(output);

  tabla = tabla.concat(JSON.parse(localStorage.getItem('save')||'[]'));
  localStorage.setItem("save", JSON.stringify(tabla)); // save output to localStorage
const tablacita = document.getElementById("tablacitas");
let retrievedScores = JSON.parse(localStorage.getItem("save"))
for (var i =0; i < retrievedScores.length; i++) {
  tablacita.innerHTML += "<tr><td>" + retrievedScores[i].nombre + "</td><td>" + retrievedScores[i].age + "</td><td>" + retrievedScores[i].hobby + "</td></tr>";
}
});