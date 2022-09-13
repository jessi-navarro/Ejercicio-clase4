
let cotizarDolar = pesos => pesos*275;
let cotizarPesos = dolar => dolar/275;



let valor = parseInt(prompt("Hola! Por favor ingresa el valor que queres cotizar. Luego te preguntaremos a qué moneda quisieras pasarlo."))
let solicitud = prompt ("Especifica si queres cotizar dolares ingresando cotizarDolar, o pesos, ingresando cotizarPesos. Cuando hayas terminado de cotizar, por favor ingresa ESC");

while (solicitud !="ESC"){
    switch (solicitud){
        case "cotizarDolar":
            alert (`Los ${valor} dólares serían ${cotizarDolar(valor)} pesos.`);
            break;
    
        case "cotizarPesos":
        alert (`Los ${valor} pesos serían ${cotizarPesos (valor)} dólares.`);
        break;

        default:
            alert ("La palabra ingresada es incorrecta.");
            break;
        }
        valor = parseInt(prompt("Ingresa el valor que queres cotizar."))
        solicitud = prompt ("Especifica si queres cotizar dolares ingresando cotizarDolar, o pesos, ingresando cotizarPesos. Cuando hayas terminado de cotizar, por favor ingresa ESC.");
}