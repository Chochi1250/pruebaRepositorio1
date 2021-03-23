//Arreglos

var arregloNombres = [ "Luis", "Diana", "Omar", "Paola" ];
console.log( arregloNombres [2] );
arregloNombres[ 2 ] = "Rosa";
console.log( arregloNombres [2] );
delete arregloNombres[2];
console.log( arregloNombres );

//Metodos de arreglo
//Length
console.log("La cantidad de elementos en el arreglo es: " 
            + arregloNombres.length() );
//para que quede mas prolijo, lineas largas se quedan asi

//push
arregloNombres.push( "Cristina" );
console.log( arregloNombres );

//pop
arregloNombres.pop();
console.log( arregloNombres );

//splice el mas grande
arregloNombres.splice( 0, 1, "Cristina" );
console.log( arregloNombres );
//elimino al proximo 1, es decir, elimino al proximo 1
//Teniendo en cuenta las posiciones post el remplazo del
//Primer valor en si. Borra su posicion y la variable

arregloNombres.splice( 1, 4 );
console.log( arregloNombres );
//Del valor 1 hasta el 4 van a ser eliminados

//Ejercicio
//Realizar un programa que lea por teclado 5 notas
//Y muestre el promedio de estas

const prompt = requiere('prompt-sync')();
var calificaciones = [];
calificaciones[0] = prompt( "Dame la primera calificacion: " );
//console.log( calificaciones[0] );
calificaciones[1] = prompt( "Dame la segunda calificacion: " );
calificaciones[2] = prompt( "Dame la tercera calificacion: " );
calificaciones[3] = prompt( "Dame la cuarta calificacion: " );
calificaciones[4] = prompt( "Dame la quinta calificacion: " );
console.log( calificaciones[0, 1, 2, 3, 4]);