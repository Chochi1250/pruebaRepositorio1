//Arreglos parte 2

var concatenarN1 = [ "Hola", "Buenas", "Tardes", ];
var concatenarN2 = [ "Adios", "Buenas", "Noches" ];
console.log( concatenarN1.concat(concatenarN2) );

//Metodo sort (Sirve para ordenar)
var frutasN1 = [ "Mandarina", "Manzana", "Sandia", "Durazno" ];
var frutasN2 = [ "Mandarina", "Manzana", "Pera", "Durazno" ];
var arregloNumeros = [ 5000, 10, 40, 200, 50 ];
frutasN1.sort(  );
console.log( frutasN1 );
frutasN2.sort(  );
console.log( frutasN2 );
arregloNumeros.sort();
console.log( arregloNumeros );

//Ciclos: for
console.log( "Hola - Forma manual" );
console.log( "Hola - Forma manual" );
console.log( "Hola - Forma manual" );
/*for( var i = 0; i <= 3; i++ ){  
    console.log( "Hola - Forma automatica" + "i: " + i );
} 
*/
for( var i = 0; i <= 10; i+2 ){
    console.log( "Hola - Forma automatica" + "i: " + i );
}
//[ 5000, 10, 200, 1000, 400 ] - Original
// 10, 1000, 200, 400, 5000 ] - Ordenada
// ctrl + c ( Nos salva en ciclados )

console.log( arregloNumeros[ 4 ] );

for( var j = 0; j < arregloNumeros.length; j++ ){
    console.log("El valor del arreglo en la" + 
    "posicion: " + j + " es: " + arregloNumeros[j] );
}