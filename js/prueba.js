class Zapatilla {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
        }
    restaEfectivo(){
        this.precio = this.precio - (this.precio * 0.15)
    }
    restaDebito(){
        this.precio = this.precio -(this.precio * 0.10)
    }
    sumaCredito(){
        this.precio = this.precio +(this.precio * 0.10)
    }
    
}


const wildhourse = new Zapatilla("wildhourse", 23999);
const pegasusTrail = new Zapatilla("pegasus trail", 27999);
const vomero = new Zapatilla("vomero 15", 32999);
const vaporfly = new Zapatilla("vaporfly next %", 69999);
let calzado
let precioFinal
let recomendacion




function debito() {
    precioFinal = calzado - (calzado * 0.10)
    return precioFinal
}
function credito() {
    precioFinal = calzado + (calzado * 0.10)
    return precioFinal
}


let superficie = prompt('en que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

// while ((superficie=!'1') && (superficie=!'2')){
//     alert('por favor, elegi una opcion valida')
//     superficie = prompt('en que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')
// }

frecuencia = prompt('con que frecuencia semanal corres? elegi una opcion: \n  1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')

// while ((frecuencia=!'1') && (frecuencia=!'2')){
//     alert('por favor, elegi una opcion valida')
//     frecuencia = prompt('con que frecuencia semanal corres? elegi una opcion: \n  1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')
// }

medioDePago = prompt('que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito (10% de descuento) \n 3-tarjeta de credito (10% de recargo)')

// while ((medioDePago=!'1') && (medioDePago=!'2')){
//     alert('por favor, elegi una opcion valida')
//         medioDePago= prompt('que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito (10% de descuento) \n 3-tarjeta de credito (10% de recargo)')
// }


//opcion zapatilla wildhourse

if ((superficie === '1') && (frecuencia === '1')&&(medioDePago==='1')) {

    recomendacion = alert('te recomendamos las Nike' + wildhourse.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.restaEfectivo)

}


if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '2')) {

    recomendacion = alert('te recomendamos las Nike' + wildhourse.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.precio)

}

if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '3')) {

    recomendacion = alert('te recomendamos las Nike' + wildhourse.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.precio)

}

// opcion zapatilla pegasus trail

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '1')) {

    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de ' + pegasusTrail.precio)

}

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '2')) {

    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de ' + pegasusTrail.precio)

}

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '3')) {

    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de ' + pegasusTrail.precio)

}

//opcion zapatilla vomero

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '1')) {

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.precio)

}


if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '2')) {

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.precio)

}

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '3')) {

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de ' + wildhourse.precio)

}

//opcion zapatilla vaporfly

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '1')) {

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $' + vaporfly.precio)

}

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '2')) {

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $' + vaporfly.precio)

}

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '3')) {

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $ ' + vaporfly.precio)

}