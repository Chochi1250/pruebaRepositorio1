//Operadores aritmeticos
var operandoN1 = 5 + 5;
console.log ( operandoN1 );
var operandoN2 = 10000;
var resultadoN1 = operandoN1 + operandoN2;
console.log ( resultadoN1 );
// Operador *
var operandoN3 = 1200;  
var operandoN4 = 2000;
var resultadoN2 = 1200 * 2000;
console.log ( resultadoN2 );
//Operador /
var resultadoN3 = operandoN2 / operandoN1;
console.log ( "El resultado de tu division es:"+resultadoN3 );
//Operador ++
resultado3++;
console.log ( "Incrementando la variable resultado3"+ resultado3 );
//Operadores de asignacion

//Operador =
operandoN1 = operandoN2;
console.log ( operandoN1 );
//Operador +=
operandoN3 += operandoN4;
console.log ( operandoN3 );
//Lo mismo pero mas largo

//operandoN3 = operandoN3 + operandoN4

//Operadores de comparacion
var numComparacion1 = 5;
var numComparacion2 = 2;
var resultadoComparacion1 = ( numComparacion1 == numComparacion2 );
console.log ( resultadoComparacion1 );
var numComparacion3 = 10;
var numComparacion4 = "diez";
var resultadoComparacion2 = ( numComparacion3 == numComparacion4 );
console,log ( resultadoComparacion2 );
var numComparacion5 = "10";
var resultadoComparacion3 = ( numComparacion5 === numComparacion3);
console.log ( resultadoComparacion3);
var resultadoComparacion4 = ( numComparacion4 !== numComparacion3);
console.log ( resultadoComparacion4 );
var resultadoComparacion5 = (numComparacion1 > numComparacion2);
console.log = ( "El resultado de la comparacion es:" + resultadoComparacion5 );
//Operadores logicos


//Resultado operador de  && - Y
// true && true --> true
// false && false --> false
// true && false --> false
// false && true --> false

//Resultado Operador || - O
//Resultado true || true --> true
//Resultado false || false --> false
//Resultado false || true --> true
//resultado true || false --> true


//Operadores logicos: && ("And" o  "Y")
var oplogicoN1 = 5;
var oplogicoN2 = 20;
var oplogicoN3 = 30;
var oplogicoN4 = 50
var resultadoOperadorLogY = ( oplogicoN1 < oplogicoN2 ) && ( oplogicoN2 < oplogicoN3 );
console.log( "El resultado del operador Y, es:" + resultadoOpLogY );
//Operadores || ("OR" o "O")
var resultadoOpLogO = ( oplogicoN1 < oplogicoN2 ) || ( oplogicoN2 < oplogicoN3);
console.log( resultadoOpLogO );
var resultadoOperadorLogO2 = ( oplogicoN1 < oplogicoN2 ) && ( oplogicoN4 < oplogicoN3 );
console.log( "el resultado del operador O, es:" + resultadoOpLogO2 );

//Operador negación !
var resultadoOperadorLogN = !resultadoOperadorLogO;
console.log( "El resultado del operador de negacion, es:" + resultadoOperadorLogO ); 