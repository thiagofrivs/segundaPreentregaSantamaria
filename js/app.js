function pregunta (){
    let unidades;
    unidades = prompt("¿Cuántas unidades desea llevar?")
    return unidades
}

class construyeProductos {
    constructor(nombre, total,cantidad) {
        this.nombre = nombre
        this.total = total
        this.cantidad = cantidad
    }
}

const productos= []



let centinela = 1;
while (centinela==1) {
    let opcion;
    let unidades =0;
    let unidadFinal= 0;
    let total =0;
    opcion=prompt('Elija un numero: \n 1- Procesador AMD 3200g    $30000 \n 2- Memoria Ram 2x8   $15000 \n 3-Monitor Samsung 24"  $40000 \n 4- Teclado T-Dagger Bora   $9000 \n 5 Fuente 500w 80 plus bronce   $5000 \n 6- Terminar')
    opcion=parseInt(opcion)
    switch(opcion){
        case 1:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "procesadores") {
                    total=total+productos[i].total
                    unidadFinal=productos[i].cantidad
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            productos.push(new construyeProductos("procesadores",total,unidadFinal))
            console.log("Se suman",unidades," procesadores, el subtotal es: ",total)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
            
            
        case 2:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "memoria") {
                    total=total+productos[i].total
                    unidadFinal=productos[i].cantidad
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            productos.push(new construyeProductos("memoria",total,unidadFinal))
            console.log("Se suman",unidades," memoria, el subtotal es: ",total)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 3:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "monitor") {
                    total=total+productos[i].total
                    unidadFinal=productos[i].cantidad
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            productos.push(new construyeProductos("monitor",total,unidadFinal))
            console.log("Se suman",unidades," monitor, el subtotal es: ",total)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 4:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "teclado") {
                    total=total+productos[i].total
                    unidadFinal=productos[i].cantidad
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            productos.push(new construyeProductos("teclado",total,unidadFinal))
            console.log("Se suman",unidades," teclado, el subtotal es: ",total)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 5:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "fuente") {
                    total=total+productos[i].total
                    unidadFinal=productos[i].cantidad
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            total+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            productos.push(new construyeProductos("fuente",total,unidadFinal))
            console.log("Se suman",unidades," fuente, el subtotal es: ",total)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 6:
            centinela=2
            break
        default:
            alert("Ingrese un número válido por favor.")
            centinela=1
    }
    console.log(productos,total)
}


