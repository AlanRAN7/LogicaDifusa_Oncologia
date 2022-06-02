function results() {
  let calif_sintomas = localStorage.getItem('calif_sintomas');
  let titulo = document.getElementById("titulo");
  let diagnostico = document.getElementById("diagnostico");
  let recomendaciones = document.getElementById("recomendaciones");
  let respuesta;

  if(localStorage.getItem('isSpecific') === 'true'){
    let canceresSeleccionados = localStorage.getItem('canceresSeleccionados').split(',');
    respuesta  = diagnosticoEspecifico(calif_sintomas, canceresSeleccionados);
  } else {
    respuesta = diagnosticoGeneral(calif_sintomas);
  }

  for(let i = 0; i < Object.keys(respuesta).length; i++){
    if(i === 2) return

    titulo.innerHTML = `${respuesta[`illness${i}`].name}`;
    diagnostico.innerHTML = `<h4>Origen</h4>${answer[`respuesta${i}`].causa}`
    recomendaciones.innerHTML = `<h4>Recomendaciones</h4>${respuesta[`illness${i}`].recomendaciones}`
}
}