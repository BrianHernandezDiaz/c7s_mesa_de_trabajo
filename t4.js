const prompt = require("prompt-sync")({ sigint: true });

let velocidad = 0;
let altura =0;


function abrirparacaidas (velocidad, altura) {

    velocidad = prompt("registro de velocidad?: ").toLowerCase();
    
    altura = prompt("registro de altura?: ").toLowerCase();

    if(velocidad < 1000 && altura >= 2000 && altura <3000){
        console.log ("abrir paracaidas");
    } else {
        console.log("no abrir paracaidas");
        
    }
}
    
abrirparacaidas();



    



