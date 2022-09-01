class Zapatilla {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

}


const wildhourse = new Zapatilla("wildhourse", 23999);
const pegasusTrail = new Zapatilla("pegasus trail", 27999);
const vomero = new Zapatilla("vomero 15", 32999);
const vaporfly = new Zapatilla("vaporfly next %", 69999);
let precioFinal
let recomendacion




alert('Hola! En este sitio te ayudaremos a encontrar el calzado adecuado para tu entrenamiento running ;)\n Estas listo? Vamos!!!')

let superficie = prompt('En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

while ((superficie!='1') && (superficie!='2')){
    alert('Por favor, elegi una opcion valida')
    superficie = prompt('En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')
}

let frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 - 1 a 3 veces por semana \n 2- 3 a 5 veces por semana')

while ((frecuencia!='1') && (frecuencia!='2')){
    alert('Por favor, elegi una opcion valida')
    frecuencia = prompt('Con que frecuencia semanal corres? Elegi una opcion: \n  1 -1 a 3 veces por semana \n 2- 3 a 5 veces por semana')
}

let medioDePago = prompt('Que medio de pago preferis?Elegi una opcion \n 1- Efectivo (15% de descuento) \n 2 -Debito (10% de descuento) \n 3 -tarjeta de credito (35% de recargo)')

while ((medioDePago!='1') && (medioDePago!='2')&&(medioDePago!='3')){
    alert('Por favor, Elegi una opcion valida')
        medioDePago= prompt('Que medio de pago preferis?Elegi una opcion \n 1 -Efectivo (15% de descuento) \n 2 -debito (10% de descuento) \n 3 -Tarjeta de crédito (35% de recargo)')
}


//opcion zapatilla wildhourse

if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '1')) {

    precioFinal = wildhourse.precio - (wildhourse.precio * 0.15)

    recomendacion = alert('Te recomendamos las Nike'+ '' + wildhourse.nombre + '' + 'y su precio pagando en efectivo es de $' + precioFinal)

}


if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '2')) {

    precioFinal = wildhourse.precio - (wildhourse.precio * 0.10)

    recomendacion = alert('Te recomendamos las Nike'+''+ wildhourse.nombre + ''+'y su precio pagando en efectivo es de $'+''+ precioFinal)

}

if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '3')) {

    precioFinal = wildhourse.precio + (wildhourse.precio * 0.35)

    recomendacion = alert('te recomendamos las Nike' + wildhourse.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}





// opcion zapatilla pegasus trail

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '1')) {
    
    precioFinal= pegasusTrail.precio - (pegasusTrail.precio * 0.15)
    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '2')) {

    precioFinal= pegasusTrail.precio - (pegasusTrail.precio * 0.10)

    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '3')) {

    precioFinal= pegasusTrail.precio + (pegasusTrail.precio * 0.35)

    recomendacion = alert('te recomendamos las Nike' + pegasusTrail.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

//opcion zapatilla vomero

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '1')) {

    precioFinal= vomero.precio - (vomero.precio * 0.10)

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}


if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '2')) {

    precioFinal= vomero.precio - (vomero.precio * 0.15)

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '3')) {

    precioFinal= vomero.precio + (vomero.precio * 0.35)

    recomendacion = alert('te recomendamos las Nike' + vomero.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

//opcion zapatilla vaporfly

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '1')) {

    precioFinal= vaporfly.precio - (vaporfly.precio * 0.15)

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '2')) {

    precioFinal= vaporfly.precio - (vaporfly.precio * 0.10)

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $' + precioFinal)

}

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '3')) {

    precioFinal= vaporfly.precio + (vaporfly.precio * 0.35)

    recomendacion = alert('te recomendamos las Nike' + vaporfly.nombre + 'y su precio pagando en efectivo es de $ ' + precioFinal)

}

alert('Esperamos que nuestra recomendación haya sido de ayuda. Hasta la próxima!!')
