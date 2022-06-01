function results() {
  let calif_sintomas = localStorage.getItem('calif_sintomas');
  let titulo = document.getElementById("titulo");
  let diagnostico = document.getElementById("diagnostico");
  let recomendaciones = document.getElementById("recomendaciones");
  let respuesta;

  if(localStorage.getItem('isSpecific') === 'true'){
    let selectedCancer = localStorage.getItem('canceresSeleccionados').split(',');
    respuesta  = diagnosticoEspecifico(calif_sintomas, selectedCancer);
  } else {
    respuesta = diagnosticoGeneral(calif_sintomas);
  }
}