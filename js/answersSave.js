function goToMain(){
    window.location.href = "../index.html"
}

function resultScreenAndSaveData(){
    let fiebre = document.getElementById("fiebre").value;
    let nauseas = document.getElementById("nauseas").value;
    let vomito = document.getElementById("vomito").value;
    let cansancio = document.getElementById("cansancio").value;
    let peso_perdido = document.getElementById("peso-perdido").value;
    let bulto_cuerpo = document.getElementById("bulto-cuerpo").value;
    let poco_apetito = document.getElementById("poco-apetito").value;
    let sudor_nocturno = document.getElementById("sudor-nocturno").value;
    let dolor_abdominal = document.getElementById("dolor-abdominal").value;
    let globulos_rojos = document.getElementById("globulos-rojos").value;
    let hinchazon_hueso = document.getElementById("hinchazon-hueso").value;
    let dolor_cuerpo = document.getElementById("dolor-cuerpo").value;
    let higado_agrandado = document.getElementById("higado-agrandado").value;
    let dificultad_respirar = document.getElementById("dificultad-respirar").value;
    let orina = document.getElementById("orina").value;
    let tos_constante = document.getElementById("tos-constante").value;
    localStorage.setItem("fiebre", fiebre)
    localStorage.setItem("nauseas", nauseas)
    localStorage.setItem("vomito", vomito)
    localStorage.setItem("cansancio", cansancio)
    localStorage.setItem("peso_perdido", peso_perdido)
    localStorage.setItem("bulto_cuerpo", bulto_cuerpo)
    localStorage.setItem("poco_apetito", poco_apetito)
    localStorage.setItem("sudor_nocturno", sudor_nocturno)
    localStorage.setItem("dolor_abdominal", dolor_abdominal)
    localStorage.setItem("globulos_rojos", globulos_rojos)
    localStorage.setItem("hinchazon_hueso", hinchazon_hueso)
    localStorage.setItem("dolor_cuerpo", dolor_cuerpo)
    localStorage.setItem("higado_agrandado", higado_agrandado)
    localStorage.setItem("dificultad_respirar", dificultad_respirar)
    localStorage.setItem("orina", orina)
    localStorage.setItem("tos_constante", tos_constante)
    window.location.href = "../pages/result.html"
}