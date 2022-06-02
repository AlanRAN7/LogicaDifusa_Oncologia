function results() {
  console.log("yo soy resultados")
  // console.log(calif_sintomas)
  let Calif_sintomas = []
  for(let i = 1; i < 16; i++) Calif_sintomas.push(parseFloat(localStorage.getItem(`p${i}`)))
  let titulo = document.getElementById("titulo");
  let diagnostico = document.getElementById("diagnostico");
  let recomendaciones = document.getElementById("recomendaciones");
  let respuesta;

  console.log(titulo, diagnostico, recomendaciones,respuesta)

  if(localStorage.getItem('isSpecific') === 'true'){
    let canceresSeleccionados = localStorage.getItem('canceresSeleccionados').split(',');
    console.log(canceresSeleccionados)
    respuesta  = diagnosticoEspecifico(Calif_sintomas, canceresSeleccionados);
    console.log(respuesta)
  } else {
    respuesta = diagnosticoGeneral(Calif_sintomas);
    console.log(respuesta)
  }

  for(let i = 0; i < Object.keys(respuesta).length; i++){
    if(i === 2) return

    titulo.innerHTML = `${respuesta[`illness${i}`].name}`;
    diagnostico.innerHTML = `${respuesta[`illness${i}`].causa}`
    recomendaciones.innerHTML = `${respuesta[`illness${i}`].recomendaciones}`
}
}