//Programacion orientada a objetos

//Creacion de un objeto
//variable = { nombreCaracteristica : Valor }
var celular = { 
    color: "Azul",
    peso: "80 g",
    numCamaras: 4,
    sistema: "ios",
    bateria: "4200 MA"
}
console.log( celular.sistema );

console.log( celular[ "numCamaras" ] ); 

//Clases

class galleta{
    constructor( tamaño, forma, sabor ){
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;

    }
}

let galletaChocolate = new galleta( "5x5 cm", "Cuadrado", "Chocolate" );
var galletaVainilla = new galleta( "6 cm", "Circulo", "Vainilla" );

console.log( galletaChocolate );
console.log( galletaVainilla );