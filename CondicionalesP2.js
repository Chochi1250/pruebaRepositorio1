//Ejemplo
//Dado un numero, separarlo en centenas, decenas y unidades
//Intercambiar la posicion entre las centenas y las unidades
//e imprimir el numero final

var numeroCompleto = 115;
//Para asegurar que sea de 3 cifras, en los primeros dos casos,
//Se cuantifican las decenas y centenas. Por lo tanto cambia
//El planteo en el tercer caso
if( numeroCompleto <= 999 && numeroCompleto > 99 ){
    var centenas = parseInt (numeroCompleto / 100);
    //centenas = parseInt (738 / 100)
    //console.log( centenas );
    var decenas = parseInt (numeroCompleto % 100) /10;
    //console.log( decenas );
    //decenas = parseInt (38 / 30)
    var unidades = (numeroCompleto % 100) - (decenas*10);
    //console.log parseInt (38-30)
    //console.log( unidades );
    console.log( "El valor final es")
    console.log( "Ingresa un numero de tres cifras: " + unidades + decenas + centenas);
}else{
    console.log( "Ingresa un numero de tres cifras")
}

//Condicional de switch
var condicionSwitch = "Luis";
var edad = 16

switch( condicionSwitch ){
    case 2:
        console.log( "El valor ingresado es: 2");
        break;
    case 6:
        console.log( "El valor ingresado es: 6");
        break;
    case "Luis":
        console.log( "Hola Luis");
        if( edad == 16 ){
            console.log( "Felicidades eres mayor que mi hermano" );
        }
        break;
    default:
        console.log( "El valor ingresado es distinto");
        break;
}
