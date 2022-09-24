class Paciente {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

let arrayPacientes = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector ("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let passwordI = formulario.children[5].value; 

let contenedor = document.querySelector("#pacienteIngresado")
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarPacientes);
btnMostrar.addEventListener('click', MostrarTodosPacientes);

inputNombre.focus();


function validarForm() {

nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    passwordI = formulario.children[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(passwordI);

if(nombreI == '' || emailI == '' || passwordI == '') {
    alert('ERROR - Debe completar todos los campos para continuar');
    inputNombre.focus();
    bandera = false;
} else{
    bandera = true;
}
}


function agregarPacientes(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true){
        let opcion = confirm("¿Esta seguro de agregar el Paciente?");
        if (opcion == true) {
            let formulario = e.target;
            arrayPacientes.push(new Paciente(nombreI, emailI, passwordI));
        } else {
            alert('No se agrega el usuario')
        }
        formulario.children[1].value = '';
        formulario.children[3].value = '';
        formulario.children[5].value = '';
        contenedor.innerHTML = '';
        AgregarAlDom();
        inputNombre.focus();
    } else{
        inputNombre.focus();
    }
}


function AgregarAlDom(){
    contenedor.innerHTML = `<h3> Último paciente Ingresado:</h3>
        <p><strong> Nombre: </strong> ${nombreI}</p>
        <p><strong> Email: </strong> ${emailI}</p>
        <p><strong> Password: </strong> ${passwordI}</p>
        <hr>`;
}

function MostrarTodosPacientes(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Listado de todos los Pacientes:</h3>';
    for (const paciente of arrayPacientes) {
        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${paciente.nombre}</p>
        <p><strong> Email: </strong> ${paciente.email}</p>
        <p><strong> Password: </strong> ${paciente.password}</p>
        <hr>`;
    }
}