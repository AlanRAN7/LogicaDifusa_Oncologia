function results() {
  let titulo = document.getElementById("titulo");
  let diagnostico = document.getElementById("diagnostico");
  let recomendaciones = document.getElementById("recomendaciones");
  let respuesta;

  if(localStorage.getItem('flag') === 'true'){
    let selectedData = localStorage.getItem('calif_sintomas').split(',');
  } else {}
}