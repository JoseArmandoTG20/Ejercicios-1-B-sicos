var calificacion = prompt('Ingrese una Calificacion del 0 al 10.');

if(calificacion >= 0 && calificacion <= 3){
    alert('Calificacion Muy Deficiente.');
}else if(calificacion > 3 && calificacion <= 5){
    alert('Calificacion Insuficiente.');
}else if(calificacion > 5 && calificacion <= 6){
    alert('Calificacion Suficiente.');
}else if(calificacion >= 6  && calificacion <= 7){
    alert('Calificacion Bien.');
}else if(calificacion >= 7 && calificacion <= 9){
    alert('Calificacion Notable.');
}else if(calificacion >= 9 && calificacion <= 10){
    alert('Calificacion Sobresaliente.');
}
else{
    alert('Ingrese una Calificacion del 0 al 10.');
}