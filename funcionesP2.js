//Ejercicio #!
//Escribir un programa que obtenga el
//precio de un producto y calcule el 
//precio total, ya que tambien se va a 
//Cobrar el costo de envio unicamente
//Si el precio del producto es mayor o 
//igual a $399

//const prompt = require('prompt-sync' )();

var nombreProducto = "iPhone11";
var precioProducto = 400;

function precioTotal( precio, nombreProducto ){
   var resultado = 0;
   if( precio >= 399 ){
       console.log( "Factura" );
       console.log( "Costo del " + nombreProducto 
       + "es: " + precio ) ;
       console.log( "Costo envio: 100" );
       resultado = precio + 100;
       console.log( "El total a pagar es: " + resultado );
   }
   else if( precio > 399 ){
        console.log( "Factura" );
        console.log( "Costo del " + nombreProducto 
        + "es: " + precio ) ;
        console.log( "Costo envio: Gratuito" );
        resultado = precio
        console.log( "El total a pagar es: "  + resultado );
   }
}
precioTotal( precioProducto, nombreProducto );

//Ambito de una funcion
function ambitoVar(){
    const i = 1;
    if ( i==1 ){
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}
//De esta forma podemos acceder a la variable

//De esta forma, nos sale que no esta definida.
//Esto pasa ya que fue definida en una funcion
//Y solo fue usada en esa funcion

function ambitoVar(){
    const i = 1;
    if ( i==1 ){
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}
//ambitoVar();
console.log( variableVar );

//let variable
let nombre = "Luis";
nombre = "Pablo";
console.log( nombre );

//let funcion
// No puede utilizarse ya que let solo funciona en bloques de codigo
// Es decir, llaves. DEbido a que no tenemos acceso a este

function ambitoLet(){
    const i = 1;
    if( i == 1){
        let variableLet = "Ambito de variableLet"
        //console.log( variableLet ); de esta forma, podemos llamar la variable let correctamente
    }
    console.log( variableLet );
}
//ambitoLet();
console.log( variableLet );

multiplicar( 12 );

//Declaracion explicita
function multiplicar( primerOperando ){
    var resultado = 3 * primerOperando;
    console.log ( "El resultado es: " + resultado );
}

//Declaracion  como expresion
resultado( 12 );
var resultado = function multiplicar( primerOperando ){
    return 3 * primerOperando;
}
//De este modo esta mal escrita


var resultado = function multiplicar( primerOperando ){
    return 3 * primerOperando;
}
console.log( resultado( 12 ) );
//Asi esta bien escrito. Es necesario al final dar un valor en las funciones de expresion