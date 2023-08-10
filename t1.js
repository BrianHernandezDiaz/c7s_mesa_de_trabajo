const prompt = require("prompt-sync")({ sigint: true });


function totalAPagar (vehiculo, litrosConsumidos) {

    vehiculo = prompt("escriba su tipo de vehiculo, coche, moto o autobus").toLowerCase();
    litrosConsumidos =prompt("cuantos litros consumio?: ").toLowerCase();

    if(vehiculo=="coche" && litrosConsumidos <= 25 && litrosConsumidos >= 0){
        console.log(litrosConsumidos*86 + 50);
    } else if (vehiculo=="coche" && litrosConsumidos > 25 && litrosConsumidos >= 0) {
        console.log(litrosConsumidos*86 + 25);
    } else if (vehiculo=="moto" && litrosConsumidos <= 25 && litrosConsumidos >= 0) {
        console.log(litrosConsumidos*70 + 50);
    } else if (vehiculo=="moto" && litrosConsumidos > 25 && litrosConsumidos >= 0) {
        console.log(litrosConsumidos*70 + 25);
    } else if (vehiculo=="autobus" && litrosConsumidos <= 25 && litrosConsumidos >= 0) {
        console.log(litrosConsumidos*25 + 50);
    } else if (vehiculo=="autobus" && litrosConsumidos > 25 && litrosConsumidos >= 0) {
        console.log(litrosConsumidos*25 + 25);
    } else {
        console.log("fuera de parametros");
    }
    
}

totalAPagar();

