//Funcion para mostar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola mundo :");
}

//Variables
function imprimirVariables(){
    let nombre = "Karen";
    let edad = 22;
    //forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    //forma moderna de concatenar cadenas
    console.log(`nombre: , ${nombre}, edad ${edad}`);

    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x");
}
//Funcion para mostar un cuadro de dialogo emergente
function arreglos(){
    //Arreglos
    let frutas = ['manzana', 'pera' ,'uva'];
    //bucles
    for (let f of frutas){
        console.log(f)
    }
    //condicionales
    if (frutas [1]==='pera'){
        console.log("La segunda fruta es una pera");
    }else{
        console.log('No es una pera');
    }
}
document.getElementById("btnSaludar").addEventListener(
    "click", function(){
    console.log("Hola");
    }
)
//Modificar
document.getElementById("btnAgregar").addEventListener(
    "click", ()=>{
       // Obtener el elemnto "lista" (ul) del documento HTML
       let lista = document.getElementById("lista");
       // Creando un nuevo elemento HTML, li = list item
       let nuevoItem = document.createElement("li");
       // Obteniendo el total de ítems de la lista
       let totalItems = lista.childElementCount;
       // Agregando un contenido (texto) al item
       nuevoItem.textContent = `Item ${totalItems + 1}`;
       // Agregar item a la lista
       lista.appendChild(nuevoItem);
    }
)