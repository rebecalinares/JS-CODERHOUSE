
alert("Bienvenido al Convertidor de Moneda") 
let opcion = prompt("Ingrese alguna de las siguientes opciones:\n1 - Si quiere hacer la conversion a Dólares \n2 - Si quiere hacer la conversion a Euros \n3 - Si quiere hacer la conversion a Reales \n0 - Si desea salir")
while (opcion != "0"){
        switch (opcion){
            case "1":
                let valor1 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a USD"));
                resultado = valor1/285;
                alert("El cambio de Pesos (AR$) a Dólares (USD) es: $ " + resultado);
                break;
            case "2":
                let valor2 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a EUR"));
                resultado = valor2/294;
                alert("El cambio de Pesos (AR$)a Euros (EUR) es: " + resultado);
                break;
            case "3":
                let valor3 = parseInt(prompt("Ingrese el monto de Pesos AR$ que desea convertir a REALES"));
                resultado = valor3/138.49;
                alert("El cambio de Pesos (AR$)a Euros (EUR) es: " + resultado);
                break;
        }
        opcion = prompt("Ingrese alguna de las siguientes opciones:\n1 - Si quiere hacer la conversion a Dólares \n2 - Si quiere hacer la conversion a Euros \n3 - Si quiere hacer la conversion a Reales \n0 - Si desea salir");

}
alert("Adiós, vuelva pronto!");


