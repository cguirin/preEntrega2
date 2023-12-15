//alert ();

class Persona {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
        this.imc = peso / ((altura / 100) * (altura / 100));
    }
}

const personas = [];

function calcularIMC() {
    let continuar = true;
    while (continuar) {
        let peso = prompt("Ingrese su peso en kilogramos:");
        let altura = prompt("Ingrese su altura en centímetros:");
        let imc = peso / ((altura / 100) * (altura / 100));

        switch (true) {
            case imc < 18.5:
                alert("Bajo peso");
                break;
            case imc >= 18.5 && imc < 25:
                alert("Peso Normal");
                break;
            case imc >= 25 && imc < 30:
                alert("Sobrepeso");
                break;
            case imc >= 30 && imc <= 40:
                alert("Obesidad");
                break;
            case imc > 40:
                alert("Obesidad Morbida");
                break;
            default:
                alert("No se ha podido realizar el cálculo");
                break;
        }

        const persona = new Persona(peso, altura);
        personas.push(persona);

        const obesidadMorbida = personas.filter(persona => persona.imc > 40);
        generarPlanNutricional(obesidadMorbida)();

        const respuesta = prompt("¿Desea ingresar los datos de otra persona? (Sí/No)").toLowerCase();
        if (respuesta !== "sí" && respuesta !== "si") {
            continuar = false;
        }
    }
}

function generarPlanNutricional(personas) {
    return function () {
        personas.forEach(persona => {
            alert(`Plan nutricional para ${persona.peso} kg y ${persona.altura} cm de altura:`);
        });
    };
}

calcularIMC();