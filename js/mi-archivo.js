class Zapatilla {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }
    restarEfectivo(){
        this.precio= this.precio -(this.precio *0.15)
    }
    restaDebito(){
        this.precio = this.precio -(this.precio *0.10)
    }
    sumaCredito(){
        this.precio = this.precio + (this.precio * 0.35)
    }
}

class ventaSugestiva{
    constructor(producto,precio){
        this.producto = producto
        this.precio = precio
    }
}


const wildhourse = new Zapatilla("wildhourse", 23999);
const pegasusTrail = new Zapatilla("pegasus trail", 27999);
const vomero = new Zapatilla("vomero 15", 32999);
const vaporfly = new Zapatilla("vaporfly next %", 69999);
const medias = new ventaSugestiva("medias",1500);
const remera = new ventaSugestiva("remera",4000);
let precioFinal = 0
let recomendacion

const stock = [wildhourse,pegasusTrail,vomero,vaporfly]

let carrito =[]



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

    wildhourse.restarEfectivo();

    recomendacion = prompt(`Te recomendamos las Nike ${wildhourse.nombre} y su precio pagando en efectivo es de \$ ${wildhourse.precio}Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No`)

    if (recomendacion==='1'){
        carrito.push(wildhourse)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }

}




else if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '2')) {

    wildhourse.restaDebito();

    recomendacion = prompt('Te recomendamos las Nike'+' '+ wildhourse.nombre + ''+'y su precio pagando con debito es de $'+' '+ wildhourse.precio+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(wildhourse)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '1') && (frecuencia === '1') && (medioDePago === '3')) {

    wildhourse.sumaCredito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + wildhourse.nombre + 'y su precio pagando con tarjeta de credito es de $'+' ' + wildhourse.precio+'.Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(wildhourse)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}





// opcion zapatilla pegasus trail

if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '1')) {
    
    pegasusTrail.restarEfectivo();
    recomendacion = prompt('te recomendamos las Nike'+' ' + pegasusTrail.nombre +' '+ 'y su precio pagando en efectivo es de $'+' ' + pegasusTrail.precio +'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(pegasusTrail)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '2')) {

    pegasusTrail.restaDebito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + pegasusTrail.nombre + 'y su precio pagando con debito es de $'+' '+pegasusTrail.precio + 'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(pegasusTrail)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '1') && (frecuencia === '2') && (medioDePago === '3')) {

    pegasusTrail.sumaCredito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + pegasusTrail.nombre + 'y su precio pagando tarjeta de credito es de $'+' ' + pegasusTrail.precio+' ' +'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')
    
    if (recomendacion==='1'){
        carrito.push(pegasusTrail)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

//opcion zapatilla vomero

if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '1')) {

    vomero.restarEfectivo();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vomero.nombre + 'y su precio pagando en efectivo es de $'+' ' + vomero.precio +' '+ 'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vomero)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}


else if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '2')) {

    vomero.restaDebito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vomero.nombre + 'y su precio pagando con debito es de $'+' ' + vomero.precio+' '+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vomero)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '2') && (frecuencia === '1') && (medioDePago === '3')) {

    vomero.sumaCredito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vomero.nombre + 'y su precio pagando con tarjeta de credito es de $'+' ' + vomero.precio+' '+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vomero)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

//opcion zapatilla vaporfly

if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '1')) {

    vaporfly.restarEfectivo();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vaporfly.nombre + 'y su precio pagando en efectivo es de $'+' ' + vaporfly.precio+ ' '+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vaporfly)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '2')) {

    vaporfly.restaDebito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vaporfly.nombre + 'y su precio pagando con debito es de $'+' ' + vaporfly.precio+' '+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vaporfly)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

else if ((superficie === '2') && (frecuencia === '2') && (medioDePago === '3')) {

    vaporfly.sumaCredito();

    recomendacion = prompt('te recomendamos las Nike'+' ' + vaporfly.nombre + 'y su precio pagando con tarjeta de credito es de $'+' ' + vaporfly.precio+' '+'Queres agregarlo a tu carrito de compras?\n 1- Si\n 2-No')

    if (recomendacion==='1'){
        carrito.push(vaporfly)
        
    }
    else if(recomendacion==='2'){
        alert('muchas gracias por utilizar nuestra herramienta online, volvé cuando quieras!')
    }
}

if (recomendacion==='1'){
    let ventaSugestiva = prompt('queres agregar alguno de estos productos para combinar con tu calzado?\n 1- 3 pares de medias por $1500 \n 2 -remera deportiva por $4000 \n 3 -No deseo agregar ningun producto adicional')
    if(ventaSugestiva==='1'){
        carrito.push(medias)
    }
    else if(ventaSugestiva==='2'){
        carrito.push(remera)
    }

}

for(let i=0 ; i<carrito.length; i++){
    precioFinal = precioFinal + carrito[i].precio
}
alert('el precio final es de $'+' '+ precioFinal)