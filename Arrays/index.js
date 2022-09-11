
class Producto {
    constructor (id, nombre, precio, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.status = true;
        this.vendido = false;
    }
    novedad () {
        this.status = false;
    }
    sale () {
        this.vendido = true;
    }
    show () {
        alert(`
        Id: ${this.id} 
        Nombre: ${this.nombre} 
        Precio: $${this.precio}
        `);
    }
}

const stock = [];
const ids = stock.map (item => {
    return {
        id: item.id,
    }
});
let opcion = "";
let select = "";

const carga = () => {
    do {
        let nombre = prompt(`Ingrese el nombre del producto`).toLowerCase();
        let precio = parseFloat(prompt(`Ingrese el precio del producto`));
        let descripcion = prompt(`Ingrese una breve descripcion del producto`).toLowerCase();
        let imagen = prompt(`cargue una imagen del producto`);
        let id = (Math.max(0,...ids)) + 1;
        const nuevoProducto = new Producto (id, nombre, precio, descripcion, imagen);
        stock.push(nuevoProducto);
        ids.push(id);
        nuevoProducto.show();
        menu2 ();
        select = "0";
    }while(select === 1);
};

const consultaStock = (consulta) => {
    do {
        for (let index = 0; index < stock.length; index++) {
            consulta = stock[index];
            consulta.show();
        }
        menu2();
        select = "0";
    }while(select === 2);
};

const menu1 = () => {
    opcion = prompt(`Ingrese una opción para continuar: \n1 - para ingresar \n0 - para salir`);
    while(opcion !== "0") {
        switch(opcion){
            case "1":
                logIn ();
                break;
            case "0":
                alert("Hasta luego");
                break;
            default:
                alert("Ingrese una opción válida");
                opcion = prompt(`Ingrese una opción para continuar: \n1 - para ingresar \n0 - para salir`);
        }
    }
};

const menu2 = () => {
    select = prompt(`Seleccione una opción para continuar: \n1 - Ingresar producto nuevo \n2 - Consultas \n0 - Salir`);
    while(select !== "0") {
        switch(select){
            case "1":
                carga ();
                break;
            case "2":
                consultaStock ();
                break;
            case "0":
                alert("Hasta luego");
                opcion = "0";
                break;
            default:
                alert("Ingrese una opción válida");
                select = prompt(`Seleccione una opción para continuar: \n1 - Ingresar producto nuevo \n2 - Consultas \n0 - Salir`);
        }
    }
};

let validacion = (a, b) => {if (a === b) {return true;}else {return false;}};

const admin = { name: "rebeca", email: "rebecaitamarlp@gmail.com", password: "admin1234" };

const logIn = () => {
    let name = prompt("Ingrese su nombre o escriba 0 para salir").toLowerCase();
    if(name === "") {
        do {
            alert("No ha ingresado ningún nombre");
            name = prompt("Ingrese su nombre").toLowerCase();
        }while(name === "")
    }else if(name === "0") {
        alert("Hasta luego");
        opcion = "0";
    }else {
        let e = 0;
        while(e < 4) {
            if(name === admin.name) {
                let password = prompt("Ingrese su contraseña").toLowerCase();
                for (i = 0; i < 3; i++) {
                    if (validacion (password, admin.password) === true) {
                        i = 3;
                        alert(`Hola ${name}, bienvenido devuelta`);
                        menu2 ();
                        opcion = "0";
                    }else {
                        alert(`La contraseña no coincide, vuelva a intentar (intentos: ${(3 - i)} )`);
                        password = prompt("Vuelva a ingresar su contraseña").toLowerCase();
                    }
                }
                e = 4;
            }else if(name === "0") {
                alert("Hasta luego");
                e = 4;
            }else {
                alert("No es un usuario válido");
                let errar = (3 - e);
                name = prompt(`Ingrese su nombre, tienes ${errar} intentos más`).toLowerCase();
                e++;
            }
            opcion = "0";
        }
    }
};



alert("Bienvenido! Identifiquese para comenzar a trabajar");

menu1 ();

alert("FIN! Para volver a comenzar recargue la página");