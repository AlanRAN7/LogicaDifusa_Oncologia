var C1 = {
    name: `Linfoma de Hodgkin y Linfoma de Hodgkin no Hodgkiniano`,
    causa: `No se sabe su precisión sobre su origen pero se genera entre las personas de entre 15 a 39 años y en las personas mayores o igual de 75 años. Las personas que sean del género masculino de nacimiento, de tez blanca y tengan otros virus como el VIH,  el virus linfotrópico humano de células T y/o el de Epstein Barr.`,
    recomendaciones: `Tener un plan de atención durante y después del tratamiento; exámenes y pruebas, algunas de ellas pueden ser los estudios del PET o CT; mantener un seguro de salud y guardar copias de los informes médicos para seguir con el tratamiento; trabajar y descansar: tener un horario para las actividades laborales; protegerse del sol porque el tratamiento puede generar respuestas alérgicas al sol.`,
    sintomasArray: [0.8, 0, 0, 0.8, 0.8, 1, 0, 0.4, 0, 0, 0, 0, 0, 0, 0, 0]
}

var C2 = {
    name: `Cáncer de Estómago`,
    causa: `Los cánceres de estómago tienden a desarrollarse lentamente en un período de muchos años. Antes de que se forme un verdadero cáncer, a menudo ocurren cambios precancerosos en el revestimiento interno (mucosa) del estómago. Estos cambios tempranos casi nunca causan síntomas y, por lo tanto, no se detectan.

    Los tumores cancerosos que comienzan en diferentes secciones del estómago podrían producir síntomas diferentes y suelen tener consecuencias diferentes. La localización del cáncer también puede afectar las opciones de tratamiento. Por ejemplo, los cánceres que se originan en la unión gastroesofágica son clasificados y tratados de la misma forma que los cánceres de esófago. Un cáncer que se origina en el cardias del estómago pero que está creciendo hacia la unión gastroesofágica también se clasifica por etapas y se trata como un cáncer de esófago.`,
    recomendaciones: `Sobrellevar los efectos emocionales; alimentarse y nutrirse correctamente; revisar constantemente su peso corporal; tener actividad física adaptable durante el tratamiento de su enfermedad o después del post-cáncer; evitar el consumo de tabaco; no tomar aspirina al menos que sea necesario para reducir los efectos negativos del cáncer.`,
    sintomasArray: [0, 0.6, 1, 0, 0.6, 0, 0.6, 0, 0.8, 1, 0, 0, 0, 0, 0, 0]
}

var C3 = {
    name: `Cáncer de Pulmón`,
    causa: `El factor más importante del que origina este tipo de cáncer es el de fumar, pero también hay otros factores, los cuales son: Tener presión arterial alta. No se sabe si el mayor riesgo se debe a la presión arterial alta en sí o a los medicamentos que se usan para tratarla; Tener sobrepeso u obesidad; Tomar ciertos medicamentos para el dolor por mucho tiempo; Tener ciertas afecciones genéticas; Tener una infección duradera con hepatitis C; Tener piedras en los riñones; Tener rasgo de células falciformes, el cual se asocia con una forma rara de cáncer de riñón (carcinoma medular renal); Estar expuesto a una sustancia química denominada tricloroetileno, que se usa para retirar grasa del metal.`,
    recomendaciones: `No fumar; tener mucho cuidado si la sustancia química que se trabaja (en caso de hacerlo) sea el tricloroetileno; revisarse la presión arterial y que esta no esté alta; cuidar la alimentación y hacer ejercicio físico; no tomar medicamentos para el dolor de manera recurrente; revisar si no se tiene una infección duradera con hepatitis C; revisar si se tiene piedras en los riñones`,
    sintomasArray: [0.6, 0, 0, 0.8, 0.8, 1, 0.6, 0, 0, 0, 0, 0, 0 ,0, 1, 0]
}

var C4 = {
    name: `Cáncer de hígado`,
    causa: `El cáncer de hígado ocurre cuando las células hepáticas desarrollan cambios (mutaciones) en su ADN. El ADN de una célula es el material que proporciona instrucciones para cada proceso químico en el cuerpo. Las mutaciones del ADN causan cambios en estas instrucciones. Un resultado es que las células pueden comenzar a crecer fuera de control y con el tiempo pueden formar un tumor, es decir, una masa de células cancerosas.

    Algunas veces se conoce la causa del cáncer de hígado, como en el caso de las infecciones crónicas por hepatitis. Pero a veces el cáncer de hígado ocurre en personas sin enfermedades preexistentes y no está claro qué lo causa.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0, 0.4, 0.6, 0, 0.8, 1, 1, 0, 0.6, 0.6, 0, 0, 0, 0, 0, 0]
}

var C5 = {
    name: `Cáncer de páncreas`,
    causa: `No está claro qué causa el cáncer de páncreas. Los médicos han identificado algunos factores que pueden aumentar el riesgo de padecer este tipo de cáncer, incluido fumar y padecer ciertas mutaciones genéticas heredadas.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0.8, 0.6, 0.6, 0.6, 0.6, 0, 0.4, 0.6, 0.8, 0, 0, 0.6, 0, 0, 0.4, 0]
}

var C6 = {
    name: `Cáncer de hueso`,
    causa: `Se desconoce la causa de la mayoría de los casos de cáncer de hueso. Un pequeño porcentaje de los casos de cáncer de hueso se ha relacionado con factores hereditarios, mientras que otros se relacionan con una exposición anterior a la radiación.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0.6, 0, 0, 0.5, 0.4, 0.8, 0, 0, 0, 0, 1, 0.8, 0, 0, 0, 0]
}

var C7 = {
    name: `Leucemia`,
    causa: `Las causas de la leucemia aún no se conocen. Sin embargo, se han identificado varios factores que pueden aumentar el riesgo Entre ellos: Tener antecedentes familiares de leucemia; Fumar, lo que aumenta el riesgo de desarrollar leucemia mieloide aguda (LMA); Trastornos genéticos como el síndrome de Down; Trastornos de la sangre, como el síndrome mielodisplásico, que a veces se denomina “preleucemia”; Tratamiento previo para el cáncer con quimioterapia o radiación; Exposición a altos niveles de radiación; Exposición a químicos como el benceno`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0.8, 0, 0, 0, 0.8, 0.6, 0, 0.5, 0, 0, 0, 0.6, 1, 0, 0, 0]
}

var C8 = {
    name: `Cáncer de Riñón`,
    causa: `No está claro qué causa la mayoría de los tipos de cáncer renal. 
    Los médicos saben que el cáncer de riñón comienza cuando algunas células del riñón desarrollan cambios (mutaciones) en su ADN. El ADN de una célula contiene las instrucciones que le dicen a una célula qué hacer. Los cambios les indican a las células que crezcan y se dividan rápidamente. La acumulación de células anormales crea un tumor que puede extenderse más allá del riñón. Algunas células pueden desprenderse y esparcirse (hacer metástasis) hacia partes distantes del cuerpo.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0.6, 0, 0, 0.8, 0.6, 0, 0.6, 0, 0, 0, 0, 0.8, 0, 0 , 1, 0]
}

var C9 = {
    name: `Cáncer de Tiroides`,
    causa: `El cáncer de tiroides está asociado con varias afecciones hereditarias, aunque no se conoce aún la causa exacta de la mayoría de los cánceres de tiroides. 

    Ciertos cambios en el ADN de una persona pueden causar que las células de la tiroides se vuelvan cancerosas. El ADN es el químico de cada una de nuestras células que conforma nuestros genes (las instrucciones sobre cómo funcionan nuestras células). Por lo general, nos asemejamos a nuestros padres porque de ellos proviene nuestro ADN. Sin embargo, el ADN afecta algo más que solo nuestra apariencia. También puede influir nuestro riesgo de padecer ciertas enfermedades, como lo son algunos tipos de cáncer.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0, 0.8, 0, 0.8, 0, 0.8]
}

var C10 = {
    name: `Cáncer de Laringe y de Hipofaringe`,
    causa: `Los cánceres de laringe que se forman en las cuerdas vocales (glotis) a menudo causan ronquera o un cambio en la voz, lo que puede conducir a que estos cánceres sean encontrados en etapas muy iniciales. Las personas que presentan cambios en la voz (como ronquera) que no se alivia dentro de 2 semanas deben consultar inmediatamente a su médico.

    Para los cánceres que no se han originado en las cuerdas vocales, la ronquera sólo ocurre después que estos cánceres alcanzan una etapa más avanzada o se han propagado a las cuerdas vocales. A veces, estos cánceres no se descubren hasta que se han propagado hasta los ganglios linfáticos y la persona nota una masa que crece en su cuello.`,
    recomendaciones: `Consulte a su medico lo más pronto posible`,
    sintomasArray: [0, 0, 0, 0, 0.6, 1, 0, 0, 0, 0, 0, 0.6, 0, 1, 0, 1]
}

var arregloEnfermedades = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10];
var umbral = 0.3;

// Método max-min para obtener el índice del arreglo de enfermedades
function diagnosticoEspecifico(data, uillness) {
    console.log("hola soy el especifico")
    let [aux, res] = [[], []];
    let respuesta = {};

    for (let i = 0; i < uillness.length; i++) {
        for (let j = 0; j < 16; j++) {
            var posicion = parseInt(uillness[i])-1;
            aux[j] = Math.min(data[j], arregloEnfermedades[posicion].sintomasArray[j]);
        }
        res[i] = aux;
        aux = [];
    }

    for (let i = 0; i < uillness.length; i++) res[i] = parseFloat(res[i].reduce((a, b) => a + b, 0));

    let i = res.indexOf(Math.max.apply(Math, res));

    if(res[i] <= umbral){
        respuesta[`illness0`] = {
            name: `¡Felicidades!`,
            causa: `¡Tu diagnostico no coincide con ninguna enfermedad!`,
            recomendaciones: `Sigue cuidándote, no olvides consultar a tu médico constantemente.`,
            };

        return respuesta
    }

    respuesta = {
        illness0: arregloEnfermedades[uillness[i]-1],
    }
    return respuesta;
}

function diagnosticoGeneral(Calif_sintomas){
    console.log("hola soy el general")
    let [resultado, auxiliar, illnessArray] = [[], [], []];
    let [j, count] = [0,0];
    let respuesta = {};

    arregloEnfermedades.map((illness) =>{
        for(let i = 0; i<15; i++) auxiliar[i] = Math.min(Calif_sintomas[i], illness.sintomasArray[i]);
        resultado[j] = auxiliar;
        auxiliar = [];
        j++;
    });

    for(let i = 0; i<10; i++) resultado[i] = parseFloat(resultado[i].reduce((a,b) => a+b, 0));

    let i = resultado.indexOf(Math.max.apply(Math, resultado));

    console.log(resultado);
    if(resultado[i] <= umbral){
        respuesta[`illness0`] = {
        name: `¡Felicidades!`,
        causa: `¡Tu diagnostico no coincide con ninguna enfermedad!`,
        recomendaciones: `Sigue cuidándote, no olvides consultar a tu médico constantemente.`,
        };

    return respuesta
};

    for(let k = 0; k<10; k++) if(resultado[k] === resultado[i]) illnessArray.push(k);
    console.log(illnessArray)
    illnessArray.map((index) =>{
        respuesta[`illness${count}`] = arregloEnfermedades[index];
        count++;
    });
        return respuesta;
}


function getCanceresSeleccionados(){
    console.log("hola yo recojo datos")
    var arrayCancer = document.getElementsByName("canceres");
    let canceresSeleccionados = [];
    for(let i = 0; i < arrayCancer.length; i++) if(arrayCancer[i].checked) canceresSeleccionados.push(arrayCancer[i].value);
    

    if(canceresSeleccionados.length === 1){
        alert('NOTA: Seleccione al menos 2 canceres diferentes');
        return  
    }

    localStorage.setItem('isSpecific', 'true');
    localStorage.setItem('canceresSeleccionados', canceresSeleccionados);
    window.location.href = '../pages/questions.html';
}

function borrarLocalStorage(){
    console.log("yo borro datos")
    localStorage.clear();
}
function moveToQuestions(){
    console.log("yo me voy a la ventana questions")
    localStorage.setItem('isSpecific', 'false');
    window.location.href = './pages/questions.html';
}

function noBack(){
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    }
}