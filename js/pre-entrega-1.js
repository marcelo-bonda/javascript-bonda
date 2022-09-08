let stockCalzado =[
    {nombre: 'wildhourse', precio: 23999, tecnologia:'camara de aire'},
    {nombre: 'pegasus trail', precio: 27999, tecnologia:'camara de aire'},
    {nombre: 'vaporfly next', precio: 69999, tecnologia:'fibra de carbono'},
    {nombre: 'alphafly ', precio: 79999, tecnologia:'fibra de carbono'},
    {nombre: 'joyrun', precio: 28999, tecnologia:'react'},
    {nombre: 'infinity run', precio: 35999, tecnologia:'react'},
    {nombre: 'vomero', precio: 32999, tecnologia: 'camara de aire'},

]

let filtrado 
let tecnologia
let porPrecio
let carrito =[]
let  venta
let superficie







let bienvenida = alert('bienvenido a Planeta running! Descubri los mejores calzados e indumentaria para tu actividad deportiva')

let opciones = prompt('selecciona la opcion que prefieras :\n 1 -Quiero ver los calzados disponibles \n2 -soy principiante, deseo asesoramiento')

if (opciones === '1'){
    filtrado = prompt('selecciona el tipo de busqueda preferida\n 1 -por tecnologia de fabrica\n 2 -por precio (de mas bajo a mas alto)')
}





//filtrado por tecnologia

if (filtrado === '1') {
    tecnologia= prompt('seleccione el tipo de tecnologia que busca:\n 1 -camara de aire\n 2 -espuma reac\n 3 -fibra de carbono')
}

if (tecnologia === '1') {
    const camaraAire =stockCalzado.filter((filtro)=>filtro.tecnologia.includes ('camara de aire'))
    alert('los calzados con esta tecnologia son\n' +JSON.stringify(camaraAire))
    
}
else if (tecnologia === '2') {
    const camaraAire =stockCalzado.filter((filtro)=>filtro.tecnologia.includes ('react'))
    alert('los calzados con esta tecnologia son\n' +JSON.stringify(camaraAire))
    
}
else if (tecnologia === '3') {
    const camaraAire =stockCalzado.filter((filtro)=>filtro.tecnologia.includes ('fibra de carbono'))
    alert('los calzados con esta tecnologia son\n' +JSON.stringify(camaraAire))
    
}


//filtrado por precio

if (filtrado ==='2'){
    porPrecio = stockCalzado.sort((a,b)=>a-b);
    venta = prompt(JSON.stringify(porPrecio) +'\n desea agregar algun calzado al carrito de compras?')

}



//asesoramiento principiantes


else if (opciones ==='2'){
    superficie = prompt('En que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

}


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
