//Ejercicio1
//Cada vez que una persona ingresa una hora del dia
//se mostrara un mensaje que diga el deporte que se
//esta realizando en la cancha


const prompt = require( 'prompt-sync' )();
var horaDia = prompt( "Dame la hora: ");
console.log( horaDia );
const prompt = require( 'prompt-sync' )();
var nombre = prompt("Ingresa tu nombre");
console.log("Hola," + nombre );

if( horaDia ){
    console.log( "Esta el equipo de futbol entrenando" );
}
else if( (horaDia > 3) && ( horaDia <= 6 ) ){
    console.log( "Esta el equipo de futbol americano" );
}
else if( ( horaDia > 6 ) && ( horaDia <= 9 ) ){
    console.log( "Esta el equipo de atletismo" );
}

/*
switch( horaDia <= 3 ){
    case true:
        console.log( "Esta el equipo de futbol entrenando");
        break;
    case false:
        console.log( "Esta otro equipo" );
}
*/

//Ejercicio 2
//Cada vez que una persona ingrese un deporte, te dira
//el horario que le corresponde en la cancha

/*
var deporte = prompt( "Porfavor dime el nombre del deporte:");
switch( deporte ){
    case "Futbol":
        console.log( "Horario de 1 a 3 PM ");
        break;
    case "Atletismo":
        console.log( "Horario de 3 a 6 PM" ); 
        break;
    case "Americano":
        console.log( "Horario de 6 a 9 PM" );
        break;       
}
*/

var arregloNumerico = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
console.log( arregloNumerico );
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
console.log( arregloNombres );
var arregloMixto = [ 20, 16, , "Luis", ,"Paola", true, false ];
console.log( arregloMixto );

console.log( arregloNombres[0] );