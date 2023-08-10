const prompt = require("prompt-sync")({ sigint: true });


function calificacion (stringUno) {

    stringUno = prompt("califica la pelicula como muy buena, buena, mediocre, mala, muy mala: " ).toLowerCase();

    let valoracion;

    switch (stringUno) {
        case "muy mala":
            valoracion = "lo lamentamos muchísimo";            
            break; 
        case "mala":
            valoracion = "lo lamentamos";
            break;
        case "mediocre":
            valoracion = "vamos a mejorar, lo prometo";            
            break; 
        case "buena":
            valoracion = "nos alegra!";
            break;
        case "muy buena":
            valoracion = "nos alegra muchísimo!";
            break;
        default:
            valoracion = "ingresaste un valor invalido"
         
        
    }
    console.log("calificaste la pelicula como " + stringUno + ", " + valoracion);
}
calificacion();

    
    
   