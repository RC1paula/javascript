var revisar = document.getElementById('revisar');

revisar.onclick = function (e){
    mirar();
}
function mirar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var area = document.getElementById('clase').value;
    console.log(nombre);
    console.log(apellido);
    console.log(clase);
    if (nombre=='tatiana' && apellido=='cabrera' && clase =='calidad'||nombre=='tatiana' && apellido=='cabrera' && clase =='frontend'){
        alert('La respuesta es Correcta');
    }
    else if (nombre=='adriana' && apellido=='duarte' && clase =='diseño'){
        alert('La respuesta es Correcta'); 
    }
    else if (nombre=='carolina' && apellido=='forero' && clase =='proyecto'){
        alert('La respuesta es Correcta'); 
    }
    else if (nombre=='yaneth' && apellido=='castillo' && clase =='gestion'){
        alert('La respuesta es Correcta'); 
    }
    else if (nombre=='luis' && apellido=='baquero' && clase =='cultura'){
        alert('La respuesta es Correcta'); 
    }
    else if (nombre=='fernando' && apellido=='galindo' && clase =='bd'){
        alert('La respuesta es Correcta'); 
    }
    else if (nombre=='jonathan' && apellido=='espitia' && clase =='php'){
        alert('La respuesta es Correcta'); 
    }
    
        else {
            alert('La respuesta es Incorrecta')
        }
    }
   
 