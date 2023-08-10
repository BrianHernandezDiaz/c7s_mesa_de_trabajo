const prompt = require("prompt-sync")({ sigint: true });

let numero = 0;
let randomnum =0;
let max = 10;

function comparar (numero) {

    numero = prompt("cual es tu numero?: ").toLowerCase();
    
    randomnum = Math.floor ( Math.random()*(max + 1));

    if(numero == randomnum){
        console.log ("adivinaste");
    } else {
        console.log("lo siento no adivinaste");
        
    }
    console.log("tu numero = " + numero, "el numero random = " + randomnum);
}
comparar();



    



