var continuar = true;
var sumaCalificaciones;
var contador = 1;
var decision;
let promedio;

while(continuar == true){
    var calificaciones = parseFloat(prompt('Ingresa una calificacion: '));
    sumaCalificaciones = calificaciones+calificaciones;
    decision = prompt('Desea agregar una calificacion mas?:');
    if(decision == "no" && decision == "No"){
        continuar = false;
        promedio = sumaCalificaciones/contador;
    }else if(decision == "si" && decision == "Si"){
      contador ++;  
    }
}
alert("El Promedio es de: "+promedio);
