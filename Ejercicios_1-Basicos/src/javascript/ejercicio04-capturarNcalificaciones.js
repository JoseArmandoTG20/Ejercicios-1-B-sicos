var numero_Calificaciones = parseInt(prompt('Ingresa la cantidad de calificaciones a capturar: '));

let calificaciones;
let sumaCalificaciones;
let promedio;

if(numero_Calificaciones > 1){
    for(x = 1; x < (numero_Calificaciones+1); x++){
        calificaciones = parseFloat(prompt('Ingresa la Calificacion: '));
        if(calificaciones >= 0 && calificaciones < 11){
            sumaCalificaciones = calificaciones+calificaciones;
        }else{
            alert('Ingresa una Calificacion del 0 al 10.');
        }
    } 
    promedio = (sumaCalificaciones/numero_Calificaciones);
}else{
    calificaciones = parseFloat(prompt('Ingresa la Calificacion: '));
    if(calificaciones >= 0 && calificaciones < 11){
        promedio = calificaciones;
    }else{
        alert('Ingresa una Calificacion del 0 al 10.');
    }
    
}
alert("El Promedio es de: "+promedio);
