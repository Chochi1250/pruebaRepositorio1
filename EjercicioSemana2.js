//Crea un programa en donde tengas que adivinar
//Las letras de una palabra de 4 letras, tendra solo
//4 intentos para adivinarla, en un inicio la palabra
//Estara oculta, pero cada vez que aciertes, se mostrara
//La letra, si adivinas la palabra antes de que se te
//Acaben los intentos, ganas, sino pierdes.

const prompt = require( 'prompt-sync' )();
var palabraOculta = [];
var palabraMostrada = [ "-", "-", "-", "-", ];
var contadorFallas = 4;
var contadorAciertos = 0;

palabraOculta[0] = prompt( "Dame la letra número1: " );
palabraOculta[1] = prompt( "Dame la letra número2: " );
palabraOculta[2] = prompt( "Dame la letra número3: " );
palabraOculta[3] = prompt( "Dame la letra número4: " );
//console.log( palabraOculta );

for( var i = 0; i < (palabraOculta.length * 2); i++ ){
    var intento = prompt( "Igresa una letra: " );
    if ( intento == palabraOculta[i] );
    switch( intento ) {
        case palabraOculta[0]:
            palabraMostrada[0] = palabraOculta[0];
            //console.log( palabraMostrada )
            contadorAciertos++;
            break;
        case palabraOculta[1]:
            palabraMostrada[1] = palabraOculta[1];
            contadorAciertos++;
            break;
        case palabraOculta[2]:
            palabraMostrada[2] = palabraOculta[2];
            contadorAciertos++;
            break;
        case palabraOculta[3]:
            palabraMostrada[3] = palabraOculta[3] ; 
            contadorAciertos++;  
            break;
            default: 
                    console.log( "Te equivocaste :c" );
                    console.log( "Te quedan" + contadorFallas + "intentos" );
                    console.log( palabraMostrada );
                    contadorFallas--;
                    break;
    }
    if( contadorAciertos == 4 ){
        break;
    }
    else if( contadorFallas == 0){
        break;
    }
    
}
if( contadorFallas = 0 && contadorAciertos < 4 ||
    ( contadorFallas > 4 )){
    console.log( "jaja perdiste" );
} elseif( contadorAciertos == 4){
    console.log( "Ganaste capo, adivinaste la palabra" );
}