addEventListener("DOMContentLoaded", (e)=>{
    let edad = Number(prompt("Digita por favor tu Edad: "));
    switch (edad>=18) {
        case true:
            console.log("Es mayor de edad");
            break;
    
        default:
            console.log("La edad ingresada no cumple los parametros");
            break;
    }
    
})