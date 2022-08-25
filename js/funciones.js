/*---------------------------------------------------------------------------------
Funcion por declaracion: 
Permite declarar una funcion a lo largo del código, primero va a buscar estas declaraciones de funciones  

/*function declaracion(){
    console.log('hubeis');
    alert("Buenos días");
}

declaracion();


//___________función por declaración con parametros______________//
function mayordedad(edad){
    mayor=(edad>=18)
    ?alert("Puede ingresar")
    :alert("No puede ingresar");
}

let e=prompt('Ingrese su edad');

mayordedad(e);

/*Funciones Declaración con Retorno:
*/

/*function promedio(sumatoria,notas){
    return(sumatoria/notas).toFixed(1);

}

let sumatoria=0;
let notas=0;

let n=prompt('¿Cuál es la cantidad de notas?');


for(n)


function promedio(sumatoria,notas){
    return(sumatoria/notas).toFixed(1);

}

let res=true;
let sumatoria=0;
let notas=0;

while (res==true){
    let note=prompt("ingrese su calificación")
    console.log("la nota es " +note)
    sumatoria=sumatoria+parseFloat(note);
    notas=notas+1;
    res=confirm("¿Desea agregar otra nota?");
}

prom=promedio(sumatoria,notas);
console.log(`su promedio de calificacion es ${prom}` )
alert(`su promedio de calificacion es ${prom}` )

--------------------------------------------------------------------------------------*/




/*-------------------------------------------------------------------------------------
 Funcion de expreción:
Deber tener variables y se utiliza cuando ya se haya inicializado la variable


//let mayoredad=function(edad){
    mayor=(edad>=18)
    ?alert("Puede ingresar")
    :alert("No puede ingresar");
}

let e=prompt('Ingrese su edad');

mayordedad(e);
-----------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------
 Función flecha =>
Es una forma mas sencilla de escribir las funciones 

let perder=(saldo, apuesta)=>{

saldo=saldo-apuesta;
return saldo;
}

perder(saldo,apuesta);
------------------------------------------------------------------------------------------*/

/*
* 
*     Ejercicio 
*

let promedio=(sumatoria,notas)=>{
    return(sumatoria/notas).toFixed(1);
}

let res=true;
let sumatoria=0;
let notas=0;

while (res==true){
    let note=prompt("ingrese su calificación")
    console.log("la nota es " +note)
    sumatoria=sumatoria+parseFloat(note);
    notas=notas+1;
    res=confirm("¿Desea agregar otra nota?");
}

prom=promedio(sumatoria,notas);
console.log(`su promedio de calificacion es ${prom}` )
alert(`su promedio de calificacion es ${prom}` )
*/




/*----------------------------------------------------------------------------------------
Funcion anonima 
no tiene nombre

let mayor=function(edad){
    mayor=(edad>=18)
    ?alert("Puede ingresar")
    :alert("No puede ingresar");
}

let e=prompt('Ingrese su edad');

mayordedad(e);

-------------------------------------------------------------------------------------------*/