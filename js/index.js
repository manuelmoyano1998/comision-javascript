function calculoPrecio(numHabitaciones, precioHabitacion) {
    let precio = numHabitaciones*precioHabitacion
    return precio
    
}

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

function ValidarSiNo(msj1) {
    let respuesta = "hola"
    while (respuesta !== "si" && respuesta!== "no") {
        respuesta = prompt(msj1).toLowerCase();
        if (respuesta !== "si" && respuesta!== "no") {
            alert("Respuesta no valida, Ingresar SI o NO")
        }     
        
    }
    
    return respuesta
}

console.log("Bienvenidos a Moyano Propiedades")

let option = -1;

while (option != 3) {
    console.log("MENU DE OPCIONES");
    console.log("1- Casa");
    console.log("2- Departamento")
    console.log("3- Salir");

    option = parseInt (prompt("Que tipo de propiedad desea buscar? (1-Casa / 2- Departamento / 3- Salir)"))
    switch (option) {
        case 1:
            alert("Eligiste casa!");
            let precioHab = 100000
            let cantHab = validarNumeroPositivo("Numero de habitaciones que desea? El precio por cada habitacion es de $100.000)")
            let precioCasa = calculoPrecio(cantHab, precioHab)
            let patioCasa = ValidarSiNo("Desea tener un patio por un agregado de $100.000 (si/no)")
            if (patioCasa== "si") {
                precioCasa = precioCasa + 100000
                alert("Elegiste casa con patio")
            
            }else{
                alert("Elegiste casa sin patio")
            }
            console.log("El precio de la casa es: $"+ precioCasa);
            alert("El precio de la casa es: $"+ precioCasa)
            break;
        
        case 2:
            alert("Elegiste departamento");
            let precioDep = 30000
            let cantDep = validarNumeroPositivo("Numero de habitaciones que desea? El precio por cada habitacion es de $30.000)")
            precioDep = calculoPrecio(cantDep, precioDep)
            let patio = ValidarSiNo("Desea tener un patio por un agregado de $50.000 (si/no)")
            if (patio== "si") {
                precioDep = precioDep + 50000
                alert("Elegiste departamento con patio")
            
            }else{
                alert("Elegiste departamento sin patio")
            }
            console.log("El precio del departamento es: $", precioDep);
            alert("El precio del departamento es: $"+ precioDep)

            break
        case 3:
            alert("Has salido del menu de opciones");
            break
        default:
            alert("Número invalido!");
            break;
    }
    
}