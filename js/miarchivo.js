
let superficie = prompt ('en que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')

wildhourse =0
pegasusTrail=0
vomero=0
vaporfly=0

while ((superficie !='1')&&(superficie !='2')){
    alert ('por favor, elegi una opcion valida')
    superficie = prompt ('en que superficie corres? elegi la opcion \n 1- tierra \n 2-asfalto')
}
//opciones de superficie de tierra


if (superficie === '1'){
    superficie = 'superficieTierra'
    primeraOpcionTierra = prompt ('cuantas veces por semana corres? elegi una opcion\n 1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')
    while ((primeraOpcionTierra !='1')&&(primeraOpcionTierra !='2')){
        alert ('por favor, elegi una opcion valida')
        primeraOpcionTierra = prompt ('cuantas veces por semana corres? elegi una opcion\n 1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')

            
            } if(primeraOpcionTierra ==='1') {
                wildhourse=23999
                segundaOpcionTierra = prompt('te recomendamos las wildhourse.que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito \n 3-tarjeta de credito (10% de recargo)')
                while ((segundaOpcionTierra!='1')&&(segundaOpcionTierra!='2')&&(segundaOpcionTierra!='3')){
                    alert ('por favor, elegi una opcion valida')
                    segundaOpcionTierra = prompt ('que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito \n 3-tarjeta de credito (10% de recargo)')
                    }
                
                }
                else if (primeraOpcionTierra=== '2'){
                pegasusTrail=27999
                
                segundaOpcionTierra = prompt('te recomendamos las pegasus trail. que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito \n 3-tarjeta de credito (10% de recargo)')
                while ((segundaOpcionTierra!='1')&&(segundaOpcionTierra!='2')&&(segundaOpcionTierra!='3')){
                    alert ('por favor, elegi una opcion valida')
                    segundaOpcionTierra = prompt ('que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2-debito \n 3-tarjeta de credito (10% de recargo)')
                    }
            }
        
            //opciones superficie asfalto


        else if (superficie === '2'){
            superficie = 'superficieAsfalto'
            primeraOpcionAsfalto = prompt ('cuantas veces por semana corres? elegi una opcion\n 1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')
            while ((primeraOpcionAsfalto !='1')&&(primeraOpcionAsfalto !='2')){
                alert ('por favor, elegi una opcion valida')
                primeraOpcionAsfalto = prompt ('cuantas veces por semana corres? elegi una opcion\n 1-1 a 3 veces por semana \n 2-3 a 5 veces por semana')
                    } if(primeraOpcionAsfalto ==='1') {
                        vomero=34999
                        segundaOpcionAsfalto = prompt('te recomendamos las Vomero 15.que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2- tarjeta de credito (10% de recargo')
                        
                    } else if (primeraOpcionAsfalto=== '2'){
                        vaporfly=69999
                        segundaOpcionAsfalto = prompt('te recomendamos las Vaporfly Netx %. que medio de pago preferis?elegi una opcion \n 1- efectivo (15% de descuento \n 2- tarjeta de credito (10% de recargo')
                    }
}
}

//funciones

function efectivo (){
    precioFinal = calzado -(calzado *0.15)
    return precioFinal
}
function debito (){
    precioFinal = calzado - (calzado * 0.10)
    return precioFinal
}
function credito(){
    precioFinal = calzado + (calzado *10)
    return precioFinal
}


//precios llamando funciones de superficie tierra 

if (segundaOpcionTierra==='1'){
    calzado = wildhourse||pegasusTrail
    efectivo ();
    alert('el precio en efectivo es $'+ precioFinal)

} else if (segundaOpcionTierra==='2'){
    calzado=wildhourse||pegasusTrail
    debito();
    alert('el precio en debito es $'+ precioFinal)
}
else if (segundaOpcionTierra==='3'){
    calzado=wildhourse ||pegasusTrail
    credito();
    alert('el precio con tarjeta es de $'+precioFinal)
}


//precio llamando funciones de superficie asfalto

if (segundaOpcionAsfalto==='1'){
    calzado = vomero||vaporfly
    efectivo ();
    alert('el precio en efectivo es $'+ precioFinal)

} else if (segundaOpcionAsfalto==='2'){
    calzado=vomero ||vaporfly
    debito();
    alert('el precio en debito es $'+ precioFinal)
}
else if (segundaOpcionAsfalto==='3'){
    calzado=vomero
    credito();
    alert('el precio con tarjeta es de $'+precioFinal)
}