
//pregunta cuantas unidades quiere llevar el usuario y devuelve ese valor numerico
function pregunta (){
    let unidades;
    unidades = prompt("¿Cuántas unidades desea llevar?")
    return unidades
}


class construyeProductos {
    constructor(nombre, subtotal,cantidad) {
        this.nombre = nombre
        this.subtotal = subtotal
        this.cantidad = cantidad
    }
}


let totalGastado=0
const productos= []
let centinela = 1

//En este ciclo se pide al usuario que elija que producto desea llevar. Luego el script se fija si ya había elegido ese elemento antes para extraer sus valores existentes y asi modificarlos, y borrar ese objeto anterior del aray. Luego procede a hacer las operaciones matemáticas pertinentes y crea un nuevo objeto usando el contructor de arriba. Por último pregunta al usuario si desea llevar mas productos, rompiendo el ciclo o empezándolo de vuelta según la eleccion 
while (centinela==1) {
    let opcion;
    let unidades =0;
    let unidadFinal= 0;
    let subtotal =0;
    
    parseInt(totalGastado)
    opcion=prompt('Elija un numero: \n 1- Procesador AMD 3200g    $30000 \n 2- Memoria Ram 2x8   $15000 \n 3-Monitor Samsung 24"  $40000 \n 4- Teclado T-Dagger Bora   $9000 \n 5 Fuente 500w 80 plus bronce   $5000 \n 6- Terminar')
    opcion=parseInt(opcion)
    switch(opcion){
        case 1:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "procesadores") {
                    subtotal=subtotal+productos[i].subtotal
                    unidadFinal=productos[i].cantidad
                    totalGastado=productos[i].totalGastado
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            subtotal+= 30000*unidades
            unidadFinal=unidades+unidadFinal
            totalGastado=totalGastado+subtotal
            productos.push(new construyeProductos("procesadores",subtotal,unidadFinal))
            console.log("Se suman",unidades," procesadores, el subtotal es: ",subtotal)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
            
            
        case 2:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "memorias") {
                    subtotal=subtotal+productos[i].subtotal
                    unidadFinal=productos[i].cantidad
                    totalGastado=productos[i].totalGastado
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            subtotal+= 15000*unidades
            unidadFinal=unidades+unidadFinal
            totalGastado=totalGastado+subtotal
            productos.push(new construyeProductos("memorias",subtotal,unidadFinal))
            console.log("Se suman",unidades," memoria, el subtotal es: ",subtotal)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 3:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "monitores") {
                    subtotal=subtotal+productos[i].subtotal
                    unidadFinal=productos[i].cantidad
                    totalGastado=productos[i].totalGastado
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            subtotal+= 40000*unidades
            unidadFinal=unidades+unidadFinal
            totalGastado=totalGastado+subtotal
            productos.push(new construyeProductos("monmitores",subtotal,unidadFinal))
            console.log("Se suman",unidades," monitor, el subtotal es: ",subtotal)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 4:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "teclados") {
                    subtotal=subtotal+productos[i].subtotal
                    unidadFinal=productos[i].cantidad
                    totalGastado=productos[i].totalGastado
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            subtotal+= 9000*unidades
            unidadFinal=unidades+unidadFinal
            totalGastado=totalGastado+subtotal
            productos.push(new construyeProductos("teclados",subtotal,unidadFinal))
            console.log("Se suman",unidades," teclado, el subtotal es: ",subtotal)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 5:
            for(let i = 0; i < productos.length; i++) {
                if (productos[i].nombre == "fuentes") {
                    subtotal=subtotal+productos[i].subtotal
                    unidadFinal=productos[i].cantidad
                    totalGastado=productos[i].totalGastado
                    productos.splice(i,1)
                }
            }
            unidades=pregunta()
            unidades=parseInt(unidades)
            subtotal+= 5000*unidades
            unidadFinal=unidades+unidadFinal
            totalGastado=totalGastado+subtotal
            productos.push(new construyeProductos("fuentes",subtotal,unidadFinal))
            console.log("Se suman",unidades," fuente, el subtotal es: ",subtotal)
            centinela=prompt("Desea elegir más productos? \n 1- SI \n 2- NO ")
            break
        case 6:
            centinela=2
            break
        default:
            alert("Ingrese un número válido por favor.")
            centinela=1
    }

    //control interno
    console.log(productos,productos[0])
    
    
}

//creo un div por cada producto comprado
for (let producto of productos){
    let container=document.createElement("div")
    container.innerHTML= `<h3> Producto: ${producto.nombre}</h3> <p> </p> <b> $ ${producto.subtotal} <p> Cantidad: ${producto.cantidad} ` 
    document.body.appendChild(container)
}

//Añado una etiqueta p con el total gastado
let html=document.createElement("p")
html.innerHTML= `El total gastado es de: ${totalGastado}`
document.body.append(html)