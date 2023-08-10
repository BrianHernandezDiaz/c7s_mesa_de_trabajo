const prompt = require("prompt-sync")({ sigint: true });


function traduccion (stringUno) {

    stringUno = prompt("ingresa la palabra casa, perro, pelota, arbol o genio: ").toLowerCase();
    let word;

    switch (stringUno) {
        case "casa":
            word = "house";            
            break; 
        case "perro":
            word = "dog";
            break;
        case "pelota":
            word = "ball";            
            break; 
        case "arbol":
            word = "tree";
            break;
        case "genio":
            word = "genious";
            break;
        
    }
    console.log(stringUno + " traduce a " + word);
}
traduccion();

    
    
   