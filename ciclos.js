//Ciclos - While
var contadorN1 = 5;
var contadorN2 = 10;
while( contadorN2 < 20 ){
    console.log( "Numero de iteracion: " + contadorN2 );
    contadorN2++;
};


while( contadorN1 < 10 && contadorN2 > 20 ){
    console.log( "ContadorN1: " + contadorN1 +
    "ContadorN2: " + contadorN2); 
    contadorN1++;
    contadorN2--;
}

//Ciclos do-while
var contadorN3 = 0;
var condicion = "Hola"
do{
    console.log( "Entraste al ciclo do while" );
    if( contadorN3 == 2 ){
        condicion = "Adios"
    }
    contadorN3++;
}while( condicion == "Hola" );


//De esta forma se repite 2 veces la condicion
do{
    console.log( "Entraste al ciclo do while" );
    contadorN3++;
    if( contadorN3 == 2 ){
        condicion = "Adios"
    }
}while( condicion == "Hola" );

var condicionN2 = 25
do{
    console.log( "Valor: " + condicionN2 );
    condicionN2-= 5;
}while( condicionN2 >= 5 );

//Ejercicio do-while
//Crear un programa que lea tantos numeros
//como quiera hasta que se reciba un 0
//Y se mostrara el resultado, que sera la suma
//De todos los numeros ingresados

const prompt = require( 'prompt-sync' )();
var recibeNumero = prompt( "Dame un numero a sumar" );
suma = 0;
do{
    //Aqui recibimos un texto, por lo cual se utiliza el parseint para pasar ese texto a entero.
    //EJ: usamos 5+5+5 sin parseint se veria como un 555. Con parseint se veria como un 15
    var recibeNumero = prompt( "Dame un numero a sumar: " ); 
    suma = suma + parseInt(recibeNumero) 
}while( recibeNumero != 0 );

console.log( "La suma total es: " + suma );

//Ejercicio while bien hecho
var recibeNumero = prompt( "Dame un numero a sumar: " ); 
while( recibeNumero != 0 ){
    suma = suma + parseInt(recibeNumero) 
}

//Ejercicio while mal hecho
recibeNumero = prompt( "Dame un numero: " );
while( recibeNumero != 0 ){
    suma = suma + parceInt( recibeNumero );
}  