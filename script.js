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