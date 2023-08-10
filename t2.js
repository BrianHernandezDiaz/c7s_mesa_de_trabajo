const prompt = require("prompt-sync")({ sigint: true });


function totalAPagar (sandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {

    sandwich = prompt("que tipo de sandwich quiere? pollo, carne o veggie?").toLowerCase();
    pan =prompt("que tipo de pan desea, blanco, negro o sin gluten?: ").toLowerCase();
    queso = prompt("quiere incluir queso si o no? ").toLowerCase();
    tomate = prompt("quiere incluir tomate si o no? ").toLowerCase();
    lechuga = prompt("quiere incluir lechuga si o no? ").toLowerCase();
    cebolla = prompt("quiere incluir cebolla si o no? ").toLowerCase();
    mayonesa = prompt("quiere incluir mayonesa si o no? ").toLowerCase();
    mostaza = prompt("quiere incluir mostaza si o no? ").toLowerCase();

    let preciosandwich = 0;
    let preciopan = 0;

// seleccion de sandwich base
    if(sandwich=="pollo") {
        preciosandwich = 150;
    } else if (sandwich=="carne" ) {
        preciosandwich = 200;
    } else if (sandwich=="veggie") {
        preciosandwich = 100;
    } else  {
        console.log("sandwich no valido"); 
              
    }
// seleccion de pan
    if(pan=="blanco") {
        preciopan = 50;
    } else if (pan=="negro" ) {
        preciopan = 60;
    } else if (pan=="sin gluten") {
        preciopan = 75;
    } else  {
        console.log("pan no valido"); 
              
    } 

    let total = preciosandwich + preciopan + (queso === "si" ? 20 : 0) + (tomate === "si" ? 15 : 0) + (lechuga === "si" ? 10 : 0) + (cebolla === "si" ? 15 : 0) + (mayonesa === "si" ? 5 : 0) + (mostaza === "si" ? 5 : 0);


   console.log(total)
}     
   

totalAPagar();


