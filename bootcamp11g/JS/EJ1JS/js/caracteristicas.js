
let peso, altura, imc;
peso = prompt ("ingrese su peso")
altura = (prompt ("ingrese su altura en cm"))/100;
imc = peso/(altura*altura);

console.log("su IMC es = " ,imc);

if(imc < 18.5){
    console.log("su composicion es peso inferior")
}else if(imc <= 24.9){
    console.log("su composicion es normal")
}else if(imc <= 29.9){
    console.log("su composicion es peso superior")
}else{
    console.log("su composicion es obeso")
}


pais = prompt("igrese su pais");
genero = prompt("ingrese su genero: (Masculino o Femenino)");
while(genero.toUpperCase() != "MASCULINO" && genero.toUpperCase() != "FEMENINO" ){
    alert("Favor de insertar un genero valido");
    genero = prompt("ingrese su genero: (Masculino o Femenino)");
}
switch(pais.toUpperCase()){
    case "MÉXICO":
    case "MEXICO":
        if(((altura < 1.7)&&(genero.toUpperCase() == "MASCULINO"))||( (altura < 1.608)&&(genero.toUpperCase() == "FEMENINO"))){
            console.log("Su estatura es menor al promedio");
        }
        else if(((altura == 1.7)&&(genero.toUpperCase() == "MASCULINO"))||((altura == 1.608)&&(genero.toUpperCase()=="FEMENINO"))){
            console.log("Su estatura es igual al promedio");
        }
        else{
            console.log("Su estatura es mayor al promedio");
        }
        break;
    case "AUSTRALIA":
        if(((altura < 1.792)&&(genero.toUpperCase() == "MASCULINO"))||( (altura < 1.659)&&(genero.toUpperCase() == "FEMENINO"))){
            console.log("Su estatura es menor al promedio");
        }
        else if(((altura == 1.792)&&(genero.toUpperCase() == "MASCULINO"))||((altura == 1.659)&&(genero.toUpperCase()=="FEMENINO"))){
            console.log("Su estatura es igual al promedio");
        }
        else{
            console.log("Su estatura es mayor al promedio");
        }
        break;
    case "CANADÁ":
    case "CANADA":
        if(((altura < 1.781)&&(genero.toUpperCase() == "MASCULINO"))||( (altura < 1.639)&&(genero.toUpperCase() == "FEMENINO"))){
            console.log("Su estatura es menor al promedio");
        }
        else if(((altura == 1.781)&&(genero.toUpperCase() == "MASCULINO"))||((altura == 1.639)&&(genero.toUpperCase()=="FEMENINO"))){
            console.log("Su estatura es igual al promedio");
        }
        else{
            console.log("Su estatura es mayor al promedio");
        }
        break;
    case "BRASIL":
        if(((altura < 1.736)&&(genero.toUpperCase() == "MASCULINO"))||( (altura < 1.609)&&(genero.toUpperCase() == "FEMENINO"))){
            console.log("Su estatura es menor al promedio");
        }
        else if(((altura == 1.736)&&(genero.toUpperCase() == "MASCULINO"))||((altura == 1.609)&&(genero.toUpperCase()=="FEMENINO"))){
            console.log("Su estatura es igual al promedio");
        }
        else{
            console.log("Su estatura es mayor al promedio");
        }
        break;
    case "REINO UNIDO":
        if(((altura < 1.775)&&(genero.toUpperCase() == "MASCULINO"))||( (altura < 1.644)&&(genero.toUpperCase() == "FEMENINO"))){
            console.log("Su estatura es menor al promedio");
        }
        else if(((altura == 1.775)&&(genero.toUpperCase() == "MASCULINO"))||((altura == 1.664)&&(genero.toUpperCase()=="FEMENINO"))){
            console.log("Su estatura es igual al promedio");
        }
        else{
            console.log("Su estatura es mayor al promedio");
        }
        break;
    default:
    console.log("no se cuenta con el dato de estatura para ", pais);
    break;
}


