//Uso de if
var numeroCondicion1 = 5;
var numeroCondicion2 = 50;
var numeroCondicion3 = 30;
if( numeroCondicion1 < numeroCondicion2 ){
    console.log( "Entraste al condicional" );
}
if( numeroCondicion1 > numeroCondicion2 ){
    console.log( "Entraste al condicional" );
}
if( true ){
    console.log( "Entraste al condicional" );
}
//Uso de else

//Para que entre a if, ambos valores deben cumplirse, caso contrario ira a la otra variable
if( (numeroCondicion1 < numeroCondicion2) && (numeroCondicion2 < numeroCondicion3) ){
    console.log( "Entraste al condicional If" );
}
else{ console.log( "Entraste al condicional Else")}

//Uso de else if
if( (numeroCondicion1 < numeroCondicion2)  && ( numeroCondicion2 < numeroCondicion3 ) ){
    console.log( "Entraste al condicional If");
}
else if( numeroCondicion1 < numeroCondicion3 ){
    console.log( "Entraste al condicional IF ELSE" );
}
else{
    console.log( "Entraste al condicional ELSE" );
}
