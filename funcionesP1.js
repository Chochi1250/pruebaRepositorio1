//Declaracion de funciones
//Ejemplo incorrecto, ya que solo declaramos la funcion y no hicimos la llamada
//Aqui unicamente la declaramos
function multiplica( primerOperando ){
    var resultado = primerOperando * 2;
    console.log( "El resultado es: " + resultado );
}

//Ejemplo correcto
function multiplica( primerOperando ){
    var resultado = primerOperando * 2;
    console.log( "El resultado es: " + resultado );
}
multiplica( 12 );

function multiplicaN4( primerOperando, segundoOperando ){
    var resultadoN3 = primerOperando * segundoOperando;
    console.log( "El resultado es: " + parseInt( resultadoN3 ) );
}
multiplicaN4( 25, 2 );


//Aqui no guardamos en una variable, sin embargo, podriamos hacer lo mismo
//Guardandolo en una variable.

//Funcion como expresion
var resultado = function multiplicaN2( primerOperando ){
         //2 * 25 --> 50
         //resultado = 50;
    return 2 * primerOperando;
}
console.log( resultado( 25 ) );



function multiplicaN3(){
    var resultadoN2 = 12 * 12;
    console.log( "El resultado es: " + parseInt( resultadoN2 ) );
}
multiplicaN3();

//Funcion flecha
//Funcion que saluda a una persona

const saludaPersona = ( nombre ) => console.log( "Hola " + nombre );
saludaPersona( "Lucas" );

const suma = ( numero ) => console.log( 12 * 2 );
suma( 12 );

//Ejercicio #1
//Escribir un programa que tenga una funcion a la que
//se le pasa como parametro un numero y devuelva como
//resultado un texto que indica si el numero es par o impar

function determinaNumero( numero ){
    if ( ( numero % 2 ) == 1 ){
        console.log( "El numero es impar" )
    }
    else if  ( ( numero % 2 ) == 0 ){
        console.log( "El numero es par" );
    }
}
determinaNumero(  );
//Aqui se incerta el numero a verificar si es par o impar


//Ejercicio #2
//Definir una funcion que muestre la informacion de un texto
//Que se introduce como argumento y determina si el texto
//contiene mayusculas, minusculas o ambas

function determinaTexto( texto ){
    if( texto == texto.toUpperCase() ){
        console.log( "El texto contiene mayusculas" );
    }
    else if( texto == texto.toLowerCase() ){
        console.log( "El texto contiene en su totalidad, minusculas" );
    }   
    else {
        ( texto == texto.toUpperCase() && texto == texto.toLowerCase() );
        console.log( "El texto contiene minusculas y mayusculas" );
    } 
}
determinaTexto( "Arriba España" );
