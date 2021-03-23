let lado = prompt("Ingrese la dimension del lado en metros");
let sustancia = prompt("Ingrese la sustancia a revisar");
let densidad;
switch(sustancia.toUpperCase()){
    case "ACERO":
        densidad = 7850;
        peso = (lado*lado*lado)/densidad;
        break;
    case "COBRE":
        densidad = 8940;
        peso = (lado*lado*lado)/densidad;
        console.log("el peso es de ",peso);
        break;
    case "ORO":
        densidad = 19300;
        peso = (lado*lado*lado)/densidad;
        console.log("el peso es de ",peso);
        break;
    case "PLATA":
        densidad = 10490;
        peso = (lado*lado*lado)/densidad;
        console.log("el peso es de ",peso);
        break;
    case "DIAMANTE":
        densidad = 3515;
        peso = (lado*lado*lado)/densidad;
        console.log("el peso es de ",peso);
        break;    
    default:
        console.log("No se cuentan con los datos de material ", sustancia);
}
