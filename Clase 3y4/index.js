/* let nombre = prompt("Ingrese su nombre");

if(nombre !== ""){
    alert(`Hola ${nombre}`);
}
else{
    alert("Nombre no identificado");
} */


/* let entrada = prompt("Ingrese un nombre por favor") .toUpperCase;
while(entrada !="NO"){
    switch(entrada){
        case"REBECA":
            alert("HOLA REBECA");
            break;
        case"MORA":
            alert("HOLA MORA");
            break;
        default:
            alert("¿QUIÉN SOS?");
            break;
    }
    entrada = prompt("Ingrese un nombre por favor");
}

alert("Muchas gracias!") */


for(let mesa = 1; mesa <=20; mesa++){
    let nombre = prompt("Ingrese su nombre para asignarle una mesa en el restaurant por favor");
    let mensaje = `Mesa #${mesa} Nombre: ${nombre}`;
    alert(mensaje);
}
alert("No tenemos más mesas para asignarle, vuelva mañana, muchas gracias!")
