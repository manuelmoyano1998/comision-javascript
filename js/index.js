// Funciones Globales

function validarNumeroPositivo(msj) {
    let num = -1
    while (num<1 || isNaN(num)) {
        num = parseInt(prompt(msj))
        if (num<1 || isNaN(num) ) {
            alert("Número invalido, ingreselo nuevamente")
            
        }
    }
    return num
}

function ValidarOpciones(msj, op1, op2) {
    let respuesta = ""
    while (respuesta !== op1 && respuesta!== op2) {
        respuesta = prompt(msj).toLowerCase();
        if (respuesta !== op1 && respuesta!== op2) {
            alert("Respuesta no valida, Ingresar " + op1 + " o " + op2)
        }     
        
    }
    
    return respuesta
}

// Seccion de clientes

let clienteId = 1
let clientes = [];
class Cliente{
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.id = clienteId;
    }
}

const agregarCliente = (cliente) => {
    clientes.push(cliente);
    clienteId++

}

const eliminarCliente = (id) => {
    let existe = clientes.some(cliente=> cliente.id === id);
    if (existe){
        clientes = clientes.filter(cliente=> cliente.id !== id);    
        alert("Has eliminado al cliente con el id: " + id + " correctamente" )
    }else{
        alert("No existe ningun usuario con ese id")
    }
};

const mostrarClientes = () => {
    let infoClientes = clientes.map (cliente => "ID: " + cliente.id + " - Nombre: " + cliente.nombre + " - Apellido: " + cliente.apellido );

    if (infoClientes.length > 0) {
        alert(infoClientes.join("\n"));
    } else{
        alert("No hay usuarios registrados")
    }
};

// Seccion de casas
let casaId = 1
let propiedades = [];
class Propiedad{
    constructor(operacion, tipo, barrio, monto ){
        this.operacion = operacion;
        this.tipo = tipo;
        this.barrio = barrio;
        this.monto = monto;
        this.id = casaId;
    }
}

const agregarPropiedad = (propiedad) => {
    propiedades.push(propiedad);
    casaId++

}

const eliminarPropiedad  = (id) => {
    let existe = propiedades.some(propiedad=> propiedad.id === id);
    if (existe){
        propiedades = propiedades.filter(propiedad=> propiedad.id !== id);    
        alert("Has eliminado a la propiedad con el id: " + id + " correctamente" )
    }else{
        alert("No existe ninguna propiedad con ese id")
    }
};

const mostrarPropiedad  = () => {
    let infoPropiedades = propiedades.map (propiedad => "ID: " + propiedad.id + " - Tipo de Operacion: " + propiedad.operacion + " - Tipo de Inmueble: " + propiedad.tipo + " - Barrio: " + propiedad.barrio );

    if (infoPropiedades.length > 0) {
        alert(infoPropiedades.join("\n"));
    } else{
        alert("No hay propiedades registradas")
    }
};

// Seccion de MENÚ

const menuCasas = () =>{
    let bandera3 = true
    while (bandera3) {
        let option = parseInt(
            prompt(
                `
            Bienvenido a menú de Clientes
            1- Mostrar propiedades
            2- Agregar propiedades
            3- Eliminar propiedades
            4- Salir
                
            `
            )
        );
        switch (option) {
            case 1:
                mostrarPropiedad()
                break;
            case 2:
                let operacion = ValidarOpciones("Ingrese tipo de operacion(venta/alquiler)", "venta", "alquiler")
                let tipo = ValidarOpciones("Ingrese el tipo de inmueble(casa/departamento", "casa", "departamento")
                let barrio = prompt("Ingrese el barrio que desea")
                let monto = prompt("Ingrese el monto que desea")
                let propiedad = new Propiedad(operacion, tipo, barrio, monto)
                agregarPropiedad(propiedad)
                break;
            case 3:
                let id = validarNumeroPositivo("Ingrese numero de id")
                eliminarPropiedad(id)

                break;
            case 4:
                bandera3 = false
                alert("Has salido del menú de clientes")
                break;

            default:
                alert("Número invalido!");
                break;
        }

    
    }

} 

const menuCliente = () =>{
    let bandera2 = true
    while (bandera2) {
        let option = parseInt(
            prompt(
                `
            Bienvenido a menú de Clientes
            1- Mostrar clientes
            2- Agregar clientes 
            3- Eliminar clientes
            4- Salir
                
            `
            )
        );
        switch (option) {
            case 1:
                mostrarClientes()
                break;
            case 2:
                let nombre = prompt("Ingrese nombre del cliente")
                let apellido = prompt("Ingrese apellido del cliente")
                let email = prompt("Ingrese email del cliente")
                let cliente = new Cliente(nombre, apellido, email)
                agregarCliente(cliente)
                break;
            case 3:
                let id = validarNumeroPositivo("Ingrese numero de id")
                eliminarCliente(id)

                break;
            case 4:
                bandera2 = false
                alert("Has salido del menú de clientes")
                break;

            default:
                alert("Número invalido!");
                break;
        }

    
    }

} 

const menuPrincipal = () => {
    let bandera = true;
    while (bandera) {
        let option = parseInt(
            prompt(
                `
            Bienvenidos a Inmobiliaria Moyano
            1- Opciones de Cliente
            2- Opciones de Propiedad         
            3- Salir
                
            `
            )
        );
        switch (option) {
            case 1:
                menuCliente()
                break;
            case 2:
                menuCasas()
                break;
            case 3:
                bandera = false
                alert("Has salido del menú de opciones")
                break;
                
        
            default:
                alert("Número invalido!");
                break;
        }

    
    }

};

menuPrincipal()
