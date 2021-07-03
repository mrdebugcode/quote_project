export function obtenerDiferenciaYear(year){
    return new Date().getUTCFullYear() - year;
}

// Calcula el total segun la marca del vehiculo
export function calcularMarca(marca){
    let incremento;

    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;

            case 'americano':
                incremento = 1.15;
                break;

            case 'asiatico':
                incremento = 1.05;
                break;
        default:
            break;
    }

    return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}