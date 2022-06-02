function goToMain(){
    window.location.href = "../index.html"
}

function saveDataUser(){
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
    let calif_sintomas = [fiebre, nauseas, vomito, cansancio, peso_perdido, bulto_cuerpo, poco_apetito, sudor_nocturno, dolor_abdominal, globulos_rojos, hinchazon_hueso, dolor_cuerpo, higado_agrandado, dificultad_respirar, orina, tos_constante]
    localStorage.setItem("p1", fiebre)
    localStorage.setItem("p2", nauseas)
    localStorage.setItem("p3", vomito)
    localStorage.setItem("p4", cansancio)
    localStorage.setItem("p5", peso_perdido)
    localStorage.setItem("p6", bulto_cuerpo)
    localStorage.setItem("p7", poco_apetito)
    localStorage.setItem("p8", sudor_nocturno)
    localStorage.setItem("p9", dolor_abdominal)
    localStorage.setItem("p10", globulos_rojos)
    localStorage.setItem("p11", hinchazon_hueso)
    localStorage.setItem("p12", dolor_cuerpo)
    localStorage.setItem("p13", higado_agrandado)
    localStorage.setItem("p14", dificultad_respirar)
    localStorage.setItem("p15", orina)
    localStorage.setItem("p16", tos_constante)
    localStorage.setItem("calif_sintomas", calif_sintomas)
    window.location.href = "../pages/result.html"
}