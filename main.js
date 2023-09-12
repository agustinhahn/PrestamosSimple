let btnSolicitarPrestamo = document.querySelector(".btnSolicitarPrestamo"); //creamos variable que haga referencia al boton (con su clase)
let inputSolicitud = document.querySelector(".inputSolicitud") //creamos variable que haga referencia al input
let divContainer = document.querySelector(".container") //creamos variable que haga referencia al div contenedor
let botonOp1 = document.createElement('button'); //creamos variable que haga referencia a un boton que aparece posteriormente
let botonOp2 = document.createElement('button'); //creamos variable que haga referencia a un boton que aparece posteriormente 2
botonOp1.textContent = '3 cuotas = 20% interes' //asignamos el texto dentro de 1 de los botones
botonOp2.textContent = '6 cuotas = 50% interes' //asignamos el texto dentro de 1 de los botones
botonOp1.classList.add('btn1') //asignamos la clase dentro de 1 de los botones
botonOp2.classList.add('btn2')//asignamos la clase dentro de 1 de los botones

inputSolicitud.addEventListener("input", function(){ //funcion que captara cada caracter tecleado dentro del input
    let textoIngresado = inputSolicitud.value //variable que va a guardar a modo de testing lo que se teclee
    console.log(textoIngresado) //console log para ver lo que entro por el input
})

btnSolicitarPrestamo.addEventListener("click", function(){ //funcion para ejecutar accion sobre el boton principal de solicitud
    let infoPedido = document.createElement('p') //aqui se crea un elemento <p> para introducir dentro del div contenedor y mostrar algo
    infoPedido.textContent = `El prestamo solicitado fue de: $${inputSolicitud.value}` //aqui se establece que dice dentro de ese <p>
    divContainer.appendChild(infoPedido) //aqui se inserta dentro del div la variable que contiene el elemento <p> creado
    opcionesPrestamo() //aqui se hace el llamado a una funcion
})

const opcionesPrestamo = () =>{ //funcion encargada de crear un div dentro del contenedor, que contendra a su vez los botones op1 y op2
    let opcionesP = document.createElement('div'); //creacion del div hijo
    divContainer.appendChild(opcionesP) //aqui se inserta el div dentro del div contenedor
    opcionesP.appendChild(botonOp1) //aqui se agrega dentro del div hijo el boton1
    opcionesP.appendChild(botonOp2)//aqui se agrega dentro del div hijo el boton2
}




botonOp1.addEventListener("click", function(){ //aqui se le da funcionalidad al boton1
    let importeSolicitado = inputSolicitud.value //aqui se guarda el valor de la variable que capta los caracteres ingresados en el input
    divContainer.innerHTML = `<h2>FELICIDADES SOLICITASTE UN PRESTAMO</h2><hr /><br />
                            <p>El importe pedido es de $${importeSolicitado}</p><hr /><br />
                            <p>La tasa de interes elegida es de 20%</p><br />
                            <p>Pagarias final $${importeSolicitado * 1.2} en 3 cuotas de $${(importeSolicitado * 1.2)/3}</p><hr /><br />
                            <button onclick=volverEmpezar()>VOLVER A EMPEZAR</button>
    `
})//mediante inner se esta reemplazando el contenido del divContainer con lo establecido posteriormente al signo =
//se esta realizando entre comillas invertidas " ` " para asi poder contener variables dentro del texto.
//se crea un titulo y varios P. Dentro de algunos P habra calculos simples para determinar los valores

botonOp2.addEventListener("click", function(){
    let importeSolicitado = inputSolicitud.value
    divContainer.innerHTML = `<h2>FELICIDADES SOLICITASTE UN PRESTAMO</h2><hr /><br />
                            <p>El importe pedido es de $${importeSolicitado}</p><hr /><br />
                            <p>La tasa de interes elegida es de 50%</p><br />
                            <p>Pagarias final $${importeSolicitado * 1.5} en 6 cuotas de $${(importeSolicitado * 1.5)/6}</p><hr /><br />
                            <button onclick=volverEmpezar()>VOLVER A EMPEZAR</button>
    `
})

function volverEmpezar(){ //funcion creada para recargar la pagina al inicio una vez finalizado el proceso
    location.reload()
}
//se hace uso de esta funcion, cuando se presiona el boton VOLVER A EMPEZAR dentro de la ultima etapa del codigo


